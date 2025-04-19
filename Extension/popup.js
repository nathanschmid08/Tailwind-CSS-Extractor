document.getElementById("downloadButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"]
      }, () => {
        document.getElementById("status").textContent = "Tailwind CSS wird extrahiert...";
      });
    });
  });
  