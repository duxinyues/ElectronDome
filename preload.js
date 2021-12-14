/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-13 23:20:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 23:20:06
 * @Description: 文件描述
 */
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
