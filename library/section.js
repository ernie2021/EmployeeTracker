const db = require("../config/connection");


function newDepartment (userInput) {
    const indexOptions = require("../options/index")
    const sql = "INSERT INTO sections (sections_name) VALUES (?)";
    db.query(sql, userInput, (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${userInput} Added to Sections`)
    indexOptions();
})
};
module.exports = newDepartment;