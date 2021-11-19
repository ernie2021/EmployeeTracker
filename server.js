const { query } = require("./config/connection");
//connection
const db = require("./config/connection")
//indexMenu
const indexOption = require("./options/index")

function init () {
    indexOption()
}

init();