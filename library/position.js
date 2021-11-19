//Calling database connection
const db = require("../config/connection");


function getPosition (position_name, position_salary, position_section_id) {
    //requiring indexMenu
    const indexOptions = require("../options/index")
    //pre-written sql statement
    const sql = "INSERT INTO positions (position_name, position_salary, position_section_id) VALUES (?, ?, ?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, [position_name, position_salary, position_section_id], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${position_name} Added to positions`)
    //Returning to the indexMenu
    indexOptions();
})
};
//exporting the addARole function
module.exports = getPosition;