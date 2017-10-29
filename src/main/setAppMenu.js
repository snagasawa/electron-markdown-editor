import { app, Menu, BrowserWindow } from 'electron'

function setAppMenu(options) {
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'Open', accelerator: 'CmdOrCtrl+O', click: () => options.openFile() },
        { label: 'Save', accelerator: 'CmdOrCtrl+S', click: () => options.saveFile() },
        { label: 'Save As...', click: () => options.saveFile() },
        { label: 'Export PDF', click: () => options.exportPDF() },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Select', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      ]
    },
    {
      lable: 'View',
      submenu: [
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+Command+I',
          click: () => BrowserWindow.getFocusedWindow().toggleDevTools()
        },
      ]
    }
  ]
  if (process.platform == 'darwin') {
    template.unshift(
      {
        label: 'MarkdownEditor',
        submenu: [
          { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
        ]
      }
    )
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
export default setAppMenu