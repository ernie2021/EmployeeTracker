//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addARole = require("../library/position");

const liveSections = [];
const liveSectionsID = {};

const questions = [
  {
    type: "input",
    name: "positionName",
    message: "What position do you want to add ?",
  },
  {
    type: "input",
    name: "positionSalary",
    message: "What is the Salary of the position ?",
  },
  {
    type: "list",
    name: "positionSection",
    message: "Where is the Section position belong to ?",
    choices: liveSections,
  },
];

function addPositionOptions() {
  //Calling database connection
  const db = require("../config/connection");
  //pre-written sql statement
  const sql = "SELECT * FROM sections";
  //using mysql2 to query the database specified in ../config/connections.js
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    //itterating through and storing each entry in result
    for (const key in results) {
      const element = results[key];
      liveSections.push(element.department_name)
        liveSectionsID[element.department_name] = element.id
    }
  });

  inquirer.prompt(questions).then((data) => {
    const positiondepartmentID = liveSectionsID[data.positionSection]
    addARole(data.positionName, data.positionSalary, positiondepartmentID);
  });
}
//exporting the addRoleMenu function
module.exports = addPositionOptions;