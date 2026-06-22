const fs = require('fs');
const path = require('path');

const pluginsDir = path.join(__dirname, 'plugins');

function loadPlugins() {
  const files = fs.readdirSync(pluginsDir);

  const plugins = files
    .filter(f => f.endsWith('.js'))
    .map(f => {
      const pluginPath = path.join(pluginsDir, f);
      return require(pluginPath);
    });

  return plugins;
}

const plugins = loadPlugins();

console.log('Loaded plugins:', plugins);

function waitForElement(selector, callback) {
  const existing = document.querySelector(selector);

  if (existing) {
    callback(existing);
    return;
  }

  const observer = new MutationObserver(() => {
    const element = document.querySelector(selector);

    if (element) {
      observer.disconnect();
      callback(element);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
addEventListener("DOMContentLoaded", (event) => {
    waitForElement(".app-game", () => {
        window.dispatchEvent(new CustomEvent("webpageLoaded"));
    });
    waitForElement(".chat-log", () => {
        window.dispatchEvent(new CustomEvent("gameplayStarted"));
    });
});