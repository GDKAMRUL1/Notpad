// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "extract") {
      const textContent = document.body.innerText;
      // Here, you can process the extracted text (textContent) and add it to your to-do list.
      // You can use the same logic as before to add tasks to your notepad.
    }
  });
  