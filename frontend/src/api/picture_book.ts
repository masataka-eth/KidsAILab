// const API_URL = "http://127.0.0.1:5001/kids-ai-lab/us-central1/on_get_contents_list";
const API_URL = "https://us-central1-kids-ai-lab.cloudfunctions.net";

//////////////////////////////
// 絵本を作成
/////////////////////////////
export async function createAndAddContents(
  google_id: string,
  text_data: string
) {
  try {
    const contents = await makeContents(google_id, text_data);
    const content_id = contents.content_id;
    const title = contents.title;
    const pages = contents.pages;

    return await addContents(google_id, content_id, title, pages);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to create and add contents: " + error.message);
    } else {
      throw new Error("Failed to create and add contents: Unknown error");
    }
  }
}

//////////////////////////////
// 作成した絵本リストの取得
/////////////////////////////
export async function getContentsList(page: number, google_id?: string) {
  try {
    const baseUrl = google_id
      ? `${API_URL}/on_get_contents_list?google_id=${google_id}&page=${page}`
      : `${API_URL}/on_get_contents_list?page=${page}`;
    const url = baseUrl;
    console.log("url:", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get contents list");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to get contents list: " + error.message);
    } else {
      throw new Error("Failed to get contents list: Unknown error");
    }
  }
}

//////////////////////////////
// 指定した絵本の取得
/////////////////////////////
export async function getContentDetail(content_id: string) {
  try {
    const response = await fetch(
      API_URL + "/on_get_contents_detail?content_id=" + content_id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get content detail");
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to get content detail: " + error.message);
    } else {
      throw new Error("Failed to get content detail: Unknown error");
    }
  }
}

// 以下は内部関数 -----------------------------
async function makeContents(google_id: string, text_data: string) {
  const response = await fetch(API_URL + "/on_make_contents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      google_id: google_id,
      text_data: text_data,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to make contents");
  }

  return await response.json();
}

async function addContents(
  google_id: string,
  content_id: string,
  title: string,
  pages: { page_number: number; page_url: string }[]
) {
  const response = await fetch(API_URL + "/on_add_contents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      google_id: google_id,
      content_id: content_id,
      title: title,
      pages: pages,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add contents");
  }

  return await response.json();
}
