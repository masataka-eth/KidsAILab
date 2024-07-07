import { defineStore } from "pinia";
import { ref } from "vue";
import { connectToMetamask, signMessage } from "@/utils/metamask";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "@/utils/firebase";

function generateNonce(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export const useAuthStore = defineStore("auth", () => {
  const walletAddress = ref<string | null>(null);
  const isSigned = ref(false);
  const nonce = ref<string | null>(null);
  const googleUser = ref<User | null>(null);

  const loginWithMetamask = async () => {
    const address = await connectToMetamask();
    if (address) {
      nonce.value = generateNonce();
      const signature = await signMessage(address, nonce.value);
      if (signature) {
        walletAddress.value = address;
        isSigned.value = true;
      }
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      googleUser.value = result.user;
      isSigned.value = true;
    } catch (error) {
      console.error("Googleログインエラー:", error);
    }
  };

  const setUser = (user: User) => {
    googleUser.value = user;
    isSigned.value = true;
  };

  const logout = () => {
    walletAddress.value = null;
    googleUser.value = null;
    isSigned.value = false;
    nonce.value = null;
    auth.signOut();
  };

  return {
    walletAddress,
    isSigned,
    nonce,
    googleUser,
    loginWithMetamask,
    loginWithGoogle,
    logout,
    setUser,
  };
});
