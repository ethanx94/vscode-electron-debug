import { app, BrowserWindow } from 'electron';
import MeaningOfLife, { sayHello } from './src/app/module';

let mainWindow: any = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  // mainWindow.loadURL('http://localhost:4001')
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  
  console.log(MeaningOfLife)
  sayHello('Bobby')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
