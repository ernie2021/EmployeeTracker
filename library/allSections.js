const db = require("../config/connection");
const cTable = require('console.table');
function viewAllSections () {
    const indexMenu = require("../options/index");
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