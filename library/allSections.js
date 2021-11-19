//Calling database connection
const db = require("../config/connection");
//console.table
const cTable = require('console.table');
function viewAllSections () {
    //requiring indexMenu
    const indexMenu = require("../options/index");
    //pre-written sql statement
    const sql = "SELECT * FROM sections";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results)
        //Returning to the indexMenu
        optionsIndex();
    })
};
//exporting the viewAllDepartments function
module.exports = viewAllSections;