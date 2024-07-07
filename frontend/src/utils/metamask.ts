declare global {
  interface Window {
    ethereum?: any;
  }
}
export async function connectToMetamask(): Promise<string | null> {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
      return null;
    }
  } else {
    console.error("Metamask is not installed");
    return null;
  }
}

export async function signMessage(
  account: string,
  nonce: string
): Promise<string | null> {
  // 署名メッセージの変更はここ
  const message = `Please sign this message to authenticate.
Nonce: ${nonce}`;
  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [message, account],
    });
    return signature;
  } catch (error) {
    console.error("Error signing message:", error);
    return null;
  }
}
