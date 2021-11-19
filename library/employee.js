const db = require("../config/connection");


function plusEmployee (employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager) {
    const indexOptions = require("../options/index")
    const sql = "INSERT INTO employees (employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [employee_first_name, employee_last_name, employee_position_id, employee_section_id, employee_manager], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${employee_first_name} ${employee_last_name} Added to roles`)
    indexOptions();
})
};
module.exports = plusEmployee;