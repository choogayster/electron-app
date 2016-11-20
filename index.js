/*const {app, BrowserWindow} = require('electron')
let win

app.on('ready', function () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height:800, autoHideMenuBar: true})

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})*/

var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  //mainWindow.webContents.openDevTools();
})

app.on('window-all-closed', function() {
  app.quit()
})
