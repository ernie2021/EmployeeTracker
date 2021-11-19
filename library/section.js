//Calling database connection
const db = require("../config/connection");


function newDepartment (userInput) {
    //requiring indexMenu
    const indexOptions = require("../options/index")
    //pre-written sql statement
    const sql = "INSERT INTO sections (sections_name) VALUES (?)";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, userInput, (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${userInput} Added to Sections`)
    //Returning to the indexMenu
    indexOptions();
})
};
//exporting the addADepartment function
module.exports = newDepartment;