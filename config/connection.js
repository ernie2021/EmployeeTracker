const mysql = require("mysql2")
require("dotenv").config()
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "employees",
});
db.connect(err => {
    if(err) throw err
})
module.exports = db