console.log('main process woking');
console.log('main.js');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path")
const url = require('url')

let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashs: true
    }));

    win.on('closed', () =>{
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () =>{
    if(win == null){
        createWindow()
    }
});