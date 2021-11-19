//Calling database connection
const db = require("../config/connection");
//console.table
const cTable = require('console.table');
function viewAllRoles () {
    //requiring indexMenu
    const indexMenu = require("../options/index");
    //pre-written sql statement
    const sql = "SELECT position.id, position_name, position_salary, section_name FROM positions, sections WHERE position.id = section.id";
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
//exporting the viewAllRoles function
module.exports = viewAllRoles;