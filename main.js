const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
let client = require('discord-rich-presence')('942539056401756192');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on('set-rpc', (event, state, detail, imageL, imageS) => {
    UpdatePresence(state, detail, imageL, imageS);
  })

  win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  createWindow("things", "things 2", "things 3", "things 4");

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//console.log(contextBridge);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

function UpdatePresence(state, details, imageL, imageS) {
  console.log("Updated Presence");
  client.updatePresence({
    state: state,
    details: details,
    //startTimestamp: Date.now(),
    //endTimestamp: Date.now() + 13370,
    largeImageKey: imageL,
    smallImageKey: imageS,
    //instance: true,
  });
}