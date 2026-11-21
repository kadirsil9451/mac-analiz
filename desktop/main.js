const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 860,
    minWidth: 360,
    title: "Maç Analiz",
    backgroundColor: "#0f6e56",
    autoHideMenuBar: true,
    webPreferences: {
      // Yerel dosyadan açılan sayfanın spor verisi API'sine istek atabilmesi için
      webSecurity: false,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  Menu.setApplicationMenu(null);
  // dış linkler varsayılan tarayıcıda açılsın
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
  win.loadFile(path.join(__dirname, "web", "index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
