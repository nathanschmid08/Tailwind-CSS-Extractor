(() => {
  console.log("[Tailwind Extractor] content.js injected");

  const styleTags = document.querySelectorAll("style");
  console.log(`[Tailwind Extractor] ${styleTags.length} style tags gefunden`);

  styleTags.forEach((style) => {
    const content = style.innerText;
    console.log(`[Tailwind Extractor] style.length: ${content.length}`);

    if (true) {
      const blob = new Blob([content], { type: "text/css" });
      const url = URL.createObjectURL(blob);
      const filename = `tailwind-generated-${Date.now()}.css`;

      console.log("[Tailwind Extractor] Sende Nachricht zum Download...");

      chrome.runtime.sendMessage(
        { action: "download-css", url, filename },
        (response) => {
          console.log("[Tailwind Extractor] Antwort vom Background Script:", response);
        }
      );
    }
  });
})();
