chrome.runtime.onInstalled.addListener(() => {
  console.log("Extensão instalada com sucesso!");
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg === "ping") {
    sendResponse("pong do background");
  }
});
