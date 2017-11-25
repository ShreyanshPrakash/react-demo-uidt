import {app,BrowserWindow} from 'electron';
import url from 'url';

function open(){
  win = new BrowserWindow();
  win.loadURL(url.format({
    pathname:'index.html',
    slashes:true
  }))
}

app.on('ready',open);
