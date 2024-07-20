// const API_URL = "http://127.0.0.1:5001/kids-ai-lab/us-central1";
const API_URL = "https://us-central1-kids-ai-lab.cloudfunctions.net";

//////////////////////////////
// クイズレベルを追加
/////////////////////////////
export async function updateQuizLevel(google_id: string, level: number) {
  try {
    const response = await fetch(API_URL + "/on_update_quiz_level", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        google_id: google_id,
        level: level,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update quiz level");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to update quiz level: " + error.message);
    } else {
      throw new Error("Failed to update quiz level: Unknown error");
    }
  }
}

//////////////////////////////
// クイズレベルを取得
/////////////////////////////
export async function getQuizLevel(google_id: string) {
  try {
    const response = await fetch(
      API_URL + "/on_get_quiz_level?google_id=" + google_id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get quiz level");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to get quiz level: " + error.message);
    } else {
      throw new Error("Failed to get quiz level: Unknown error");
    }
  }
}

export async function getQuizByLevel(level: number) {
  try {
    const response = await fetch(API_URL + "/on_make_quiz?level=" + level, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get quiz by level");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to get quiz by level: " + error.message);
    } else {
      throw new Error("Failed to get quiz by level: Unknown error");
    }
  }
}

//////////////////////////////
// クイズレベルTOP10を取得
/////////////////////////////
export async function getQuizLevelTop10() {
  try {
    const response = await fetch(API_URL + "/on_get_quiz_level_top10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get quiz level top 10");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to get quiz level top 10: " + error.message);
    } else {
      throw new Error("Failed to get quiz level top 10: Unknown error");
    }
  }
}
