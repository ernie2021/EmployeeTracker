const db = require("../config/connection");
function employeePosition (params) {
    const indexOptions = require("../menus/index");
    const sql = `UPDATE employees SET employee_position_id = ? WHERE id = ?`;
    db.query(sql, params, (err, results) => {
        console.log("Position refreshed");
        indexOptions();
    })
};
module.exports = employeePosition;