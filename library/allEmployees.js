const db = require("../config/connection");
const tableConsole = require('console.table');

function allEmployees() {
    const optionsIndex = require('../options/index');

    const sql = "SELECT employees.id, employee_first_name, employee_last_name, position_name, position_salary, section_name, employee_manager FROM employees, positions, sections WHERE employees.employee_position_id = position.id AND employees.employee_section_id = departments.id";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results);
        optionsIndex();
    })

}