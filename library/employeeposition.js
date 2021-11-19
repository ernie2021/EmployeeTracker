//Calling database connection
const db = require("../config/connection");
function employeePosition (params) {
    //requiring indexMenu
    const indexOptions = require("../menus/index");
    //pre-written sql statement
    const sql = `UPDATE employees SET employee_position_id = ? WHERE id = ?`;
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, params, (err, results) => {
        console.log("Position refreshed");
        //Returning to the indexMenu
        indexOptions();
    })
};
//exporting the updateEmployeeRole function
module.exports = employeePosition;