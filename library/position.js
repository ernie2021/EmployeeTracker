const db = require("../config/connection");


function getPosition (position_name, position_salary, position_section_id) {
    const indexOptions = require("../options/index")
    const sql = "INSERT INTO positions (position_name, position_salary, position_section_id) VALUES (?, ?, ?)";
    db.query(sql, [position_name, position_salary, position_section_id], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${position_name} Added to positions`)
    indexOptions();
})
};
module.exports = getPosition;