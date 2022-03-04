const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  const client = require('discord-rich-presence')('942539056401756192');

  client.updatePresence({
    //state: 'Tired',
    details: 'Doin absolutely nothin 😑',
    //startTimestamp: Date.now(),
    //endTimestamp: Date.now() + 13370,
    largeImageKey: 'snek_large',
    smallImageKey: 'snek_small',
    //instance: true,
  });
  
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
