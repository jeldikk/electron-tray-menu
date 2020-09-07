const {Menu} = require("electron");
const {app} = require('electron')


const menuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label: 'New File'
            },
            {
                label: 'Edit File'
            },
            {
                label: 'Quit',
                accelerator: 'Ctrl+Q',
                click(item, focusedWindow){
                    console.log('Quit is clicked')
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu:[
            {
                role: 'reload'
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: 'Ctrl+Shift+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]

    }
]


const buildMenu = Menu.buildFromTemplate(menuTemplate);
// console.log(buildMenu)

module.exports = {
    buildMenu
}
