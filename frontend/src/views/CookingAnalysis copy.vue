<template>
  <div class="container mx-auto px-4 mt-[-20px]">
    <h2 class="text-4xl font-bold mb-4 text-center text-purple-700">
      <i class="fas fa-chart-pie mr-2"></i> りょうりをぶんせきする
    </h2>
    <p class="text-center text-lg mb-4 text-gray-600">
      AIにりょうりをぶんせきさせよう🔍
    </p>
    <input type="file" @change="onFileSelected" accept="image/*" />
    <!-- <p>{{ selectedFile?.name }}</p> -->
    <br />
    <button
      @click="uploadFile"
      :disabled="!selectedFile || isUploading"
      class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8"
    >
      {{ isUploading ? "アップロード中..." : "アップロード" }}
    </button>
    <div v-if="progressUpload > 0" class="text-center mt-4">
      <i class="fas fa-spinner fa-spin text-8xl text-purple-700 mt-2"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { uploadFood } from "../api/food_analysis";

const userStore = useUserStore();
const selectedFile = ref(null);
const progressUpload = ref(0);
const isUploading = ref(false);

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  isUploading.value = true;
  progressUpload.value = 0;

  try {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileContent = e.target.result.split(",")[1]; // Base64エンコードされたファイル内容
      const originalFileName = selectedFile.value.name;
      const fileExtension = originalFileName.split(".").pop();
      const timestamp = new Date().getTime();
      const newFileName = `${userStore.uid}_${timestamp}.${fileExtension}`;

      const response = await uploadFood(
        userStore.uid,
        newFileName,
        fileContent
      );
      console.log("アップロード成功:", response);

      progressUpload.value = 100;
      isUploading.value = false;
    };
    reader.readAsDataURL(selectedFile.value);
  } catch (error) {
    console.error("アップロードエラー:", error);
    isUploading.value = false;
  }
};
</script>
