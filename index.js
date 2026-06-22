const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const RPC = require('discord-rpc');
const rpcTimestamp = new Date()
/// app.setPath('userData', path.join(__dirname, 'data'));
const clientId = '1517356841565159547';
RPC.register(clientId);
const rpc = new RPC.Client({
  transport: 'ipc'
});
async function setActivity() {
  if (!rpc) return;

  rpc.setActivity({
    details: 'Pony Town',
    startTimestamp: rpcTimestamp,
    largeImageKey: 'logo',
    largeImageText: 'Pony Town',
    smallImageKey: 'lambda',
    smallImageText: 'Lambda Client'
  });
}
function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
      nodeIntegration: true, 
      contextIsolation: false
    }
  })

  win.loadURL("https://pony.town")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

rpc.on('ready', () => {
  console.log('Discord RPC connected');
  setActivity();

  setInterval(() => {
    setActivity();
  }, 10 * 1000);
});

rpc.login({ clientId }).catch(console.error);