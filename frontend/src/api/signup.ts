// const API_URL = "http://127.0.0.1:5001/kids-ai-lab/us-central1";
const API_URL = "https://us-central1-kids-ai-lab.cloudfunctions.net";

export async function signup(
  google_id: string,
  name: string,
  image_url: string
) {
  const response = await fetch(API_URL + "/on_add_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      google_id: google_id,
      name: name,
      image_url: image_url,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return await response.json();
}

export default signup;
