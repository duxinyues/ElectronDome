/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-13 23:19:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 23:19:25
 * @Description: 文件描述
 */
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  })
  
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
  })
  