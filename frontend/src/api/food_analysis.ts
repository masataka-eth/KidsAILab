const API_URL = "http://127.0.0.1:5001/kids-ai-lab/us-central1";
// const API_URL = "https://us-central1-kids-ai-lab.cloudfunctions.net";

//////////////////////////////
// 食品画像をアップロード
//////////////////////////////
export const uploadFood = async (
  userId: string,
  fileName: string,
  fileContent: string
) => {
  try {
    const response = await fetch(`${API_URL}/on_food_upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        file_name: fileName,
        file_content: fileContent,
      }),
    });
    return response.json();
  } catch (error) {
    console.error("食品のアップロード中にエラーが発生しました:", error);
    throw error;
  }
};

//////////////////////////////
// 登録データを取得
//////////////////////////////
export const getFoodData = async (userId: string, page = 1) => {
  console.log("ユーザーID:", userId);
  console.log("ページ:", page);
  try {
    const response = await fetch(
      `${API_URL}/on_get_food_data?user_id=${userId}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("食品データの取得中にエラーが発生しました:", error);
    throw error;
  }
};
