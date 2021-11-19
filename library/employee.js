//Calling database connection
const db = require("../config/connection");


function plusEmployee (employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager) {
    //requiring indexMenu
    const indexOptions = require("../options/index")
    //pre-written sql statement
    const sql = "INSERT INTO employees (employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager) VALUES (?, ?, ?, ?, ?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, [employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${employee_first_name} ${employee_last_name} Added to roles`)
    //Returning to the indexMenu
    indexOptions();
})
};
//exporting the addAnEmployee function
module.exports = plusEmployee;