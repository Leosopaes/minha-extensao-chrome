document.getElementById('btn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Verifica se a URL é permitida
  if (tab.url.startsWith("chrome://")) {
    alert("Esta extensão não funciona em páginas internas do Chrome.");
    return;
  }

  // Injeta o alerta na aba
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => alert("Olá! Isso veio da extensão 🎉")
  });
});
