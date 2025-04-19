chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "download-css") {
      chrome.downloads.download(
        {
          url: message.url,
          filename: message.filename,
          saveAs: true
        },
        (downloadId) => {
          if (chrome.runtime.lastError) {
            sendResponse({ status: "error", message: chrome.runtime.lastError.message });
          } else {
            sendResponse({ status: "success", downloadId });
          }
        }
      );
      // Return true to keep sendResponse alive (async call)
      return true;
    }
  });
  