// const API_URL = "http://127.0.0.1:5001/kids-ai-lab/us-central1";
const API_URL = "https://us-central1-kids-ai-lab.cloudfunctions.net";

//////////////////////////////
// 食材を取得
/////////////////////////////
export const getMaterials = async () => {
  const response = await fetch(`${API_URL}/on_get_cooking_materials`);
  return response.json();
};

//////////////////////////////
// レシピを取得
/////////////////////////////
export const getRecipes = async (material: string) => {
  const response = await fetch(
    `${API_URL}/on_get_cooking_recipe?material=${material}`
  );
  return response.json();
};
