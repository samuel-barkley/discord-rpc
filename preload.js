const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('discordRPC', {
  updatePresence: (state, detail, imageL, imageS) => ipcRenderer.send('set-rpc', state, detail, imageL, imageS)
})

window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector);
      if (element) element.innerText = text;
    };
  
    for (const type of ["chrome", "node", "electron"]) {
      replaceText(`${type}-version`, process.versions[type]);
    }
  });
  