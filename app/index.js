console.log('from index.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click', function(event){
    let winWin = new BrowserWindow();
    winWin.loadURL(url.format({
        pathname: path.join(__dirname, 'win.html'),
        protocol: 'file',
        slashs: true
    }));
})