/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-13 21:48:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 21:54:51
 * @Description: 文件描述
 */
const {app,BrowserWindow} = require('electron');

function createWindow(){
    const  win = new BrowserWindow({
        width:800,
        height:600,
    });

    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    createWindow()
})