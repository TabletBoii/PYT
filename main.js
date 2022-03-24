const { app, BrowserWindow } = require("electron")


const path = require("path");
//sqlConnection.then(r => console.log(r))
const isDev = require("electron-is-dev");

//Create separate BrowserWindow
let electronWindow;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

const createWindow = () => {

  electronWindow = new BrowserWindow({
    width: 1285,
    height: 900,
    skipTaskbar: false,
    resizable: false,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
    },
        titleBarOverlay: {
          color: '#2f3241',
          symbolColor: '#74b1be'
        }
  })

  electronWindow.loadURL(
      isDev
          ? "http://localhost:3000"
          : `file://${path.join(__dirname, './build/index.html')}`
  );
  if (isDev) {
    electronWindow.webContents.openDevTools({ mode: "detach" });
  }
  electronWindow.openDevTools();
  electronWindow.on('closed', () => {
    electronWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform!='darwin'){
    app.quit();
  }
})

app.on('activate', () => {
  if(electronWindow === null){
    createWindow()
  }
})



