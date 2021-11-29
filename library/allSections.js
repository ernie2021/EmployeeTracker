const db = require("../config/connection");
const tableConsole = require('console.table');
function viewAllSections () {
    const optionsIndex = require("../options/index");
    const sql = "SELECT * FROM sections";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };
        console.table(results)
        optionsIndex();
    })
};
module.exports = viewAllSections;