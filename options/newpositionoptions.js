const inquirer = require("inquirer");
const db = require("../config/connection");
const updateEmployeePosition = require("../library/employeeposition");
async function updateEmployeePostionOptions() {
  const livePositions = [];
  const livePositionsID = {};
  const allEmployeeInfo = {};
  const allEmployeeNames = [];
  const sql = "SELECT * FROM position";
  const sql2 = "SELECT * FROM employees";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    for (const key in results) {
      const element = results[key];
      livePositions.push(element.position_name);
      livePositionsIds[element.position_name] = element.id;
    }
  });
  db.query(sql2, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    for (const key in results) {
      const element = results[key];
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`] = {};
      const elementData = {};
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].id = element.id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_first_name = element.employee_first_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_last_name = element.employee_last_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_role_id = element.employee_role_id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_department_id = element.employee_department_id;
      allEmployeeNames.push(
        `${element.employee_first_name} ${element.employee_last_name}`
        );
      }
    });
    
  setTimeout(() => {
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "Which Employee?",
      choices: allEmployeeNames,
    },
    {
      type: "list",
      name: "newRole",
      message: "What is the new role?",
      choices: livePositions,
    },
  ];

    inquirer.prompt(questions).then((data) => {
    const employeeNewPosition =[];
    for (const key in livePositionsID) {
      const element = livePositionsID[key];
      if (key == data.newPosition) {
        employeeNewPosition.push(element)
      }
    }
    for (const key in allEmployeeInfo) {
      const element = allEmployeeInfo[key];
      if (key == data.employee) {
        employeeNewPosition.push(element.id)
      }
    }
  
    updateEmployeePosition(employeeNewPosition)
  });
  
}, 100)
}
module.exports = updateEmployeePostionOptions;