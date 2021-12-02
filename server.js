const { query } = require("./config/connection");
//connection
const db = require("./config/connection")
//indexMenu
const indexMenu = require("./menus/index")

function init () {
    indexMenu()
}

init();