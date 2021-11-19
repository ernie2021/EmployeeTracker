const inquirer = require("inquirer");
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
  const db = require("../config/connection");
  const sql = "SELECT * FROM sections";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
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
module.exports = addPositionOptions;