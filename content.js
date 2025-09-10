console.log("Content script injetado na página!");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg === "highlight") {
    document.body.style.outline = "5px solid red";
    sendResponse("Página destacada!");
  }
});
