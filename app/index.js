const path = require('path')

const {app, BrowserWindow, Menu, Tray} = require('electron')
const {buildMenu} = require("./menu_data");


let mainWindow = null;
let tray = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        frame: false,
        webPreferences:{
            nodeIntegration: true
        },
        show: false
    });


    mainWindow.loadFile(`${__dirname}/web/main.html`)

    mainWindow.once('ready-to-show',()=>{
        // console.log('mainWindow is ready to show');
        // mainWindow.show()
    });

    Menu.setApplicationMenu(buildMenu);
    // console.log("menu_template is :", buildMenu);
    mainWindow.on('closed',()=>{
        mainWindow = null;
        app.quit();
    })

    let iconName = "./assets/tray_icon.jpg"
    let iconPath = path.join(__dirname, iconName);
    console.log("iconPath is :", iconPath);


    tray = new Tray(iconPath);
    tray.setToolTip("tray tool tip")

    tray.on('click',(event, bounds)=>{
        
        let win_bounds = mainWindow.getBounds();
        console.log(win_bounds)
        if(mainWindow.isVisible()){
            mainWindow.hide()
        }
        else{
            mainWindow.setBounds({
                x: bounds.x,
                y: bounds.y,
                width: win_bounds.width,
                height: win_bounds.height
            })
            mainWindow.show();
        }
    })
})