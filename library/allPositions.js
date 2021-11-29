const db = require("../config/connection");
const tableConsole = require('console.table');
function viewAllRoles () {
    const optionsIndex = require("../options/index");
    const sql = "SELECT position.id, position_name, position_salary, section_name FROM positions, sections WHERE position.id = section.id";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results)
        optionsIndex();
    })
};
module.exports = viewAllRoles;

