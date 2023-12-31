// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const extractButton = document.getElementById("extractButton");
  
    extractButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "extract" });
      });
    });
  });
  