//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addAnEmployee = require("../library/addEmployee");

const currentDepartments = [];
const currentDepartmentIds = {};
const roles = [];
const currentRoles = [];
const currentRoleIds = {};
const currentRoleDepartmentIds = {};

const questions = [
    {
      type: "input",
      name: "firstName",
      message: "What is the first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name?",
    },
    {
      type: "list",
      name: "department",
      message: "What Department?",
      choices: currentDepartments,
    },
  ];

  const whatRole = [
    {
      type: "list",
      name: "role",
      message: "What Role?",
      choices: roles
    },
    {
      type: "input",
      name: "manager",
      message: "Who is the Manager?",
    }
  ]

  function addEmployeeMenu() {
    //Calling database connection
    const db = require("../config/connection");
    //pre-written sql statements
    const sql = "SELECT * FROM departments";
    const sql2 = "SELECT * FROM roles";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      //itterating through and storing each entry in result
      for (const key in results) {
        const element = results[key];
          currentDepartments.push(element.department_name)
          currentDepartmentIds[element.department_name] = element.id
      }
    });
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql2, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      //itterating through and storing each entry in result
      for (const key in results) {
        const element = results[key];
          currentRoles.push(element.role_name)
          currentRoleIds[element.role_name] = element.id
          currentRoleDepartmentIds[element.role_name] = element.role_department_id
      }
    });
    
    inquirer.prompt(questions).then((data) => {
      const employee = {};
      employee.departmentId = currentDepartmentIds[data.department];
      employee.role = 0;
      for (const key in currentRoleDepartmentIds) {
          const element = currentRoleDepartmentIds[key];
          if (element == employee.departmentId) {
            roles.push(key)
          }
      }

      inquirer.prompt(whatRole).then((roleData) => {
        employee.role = currentRoleDepartmentIds[roleData.role]
        addAnEmployee(data.firstName, data.lastName, employee.role, employee.departmentId, roleData.manager);
      });
    });
  }
  //exporting the addEmployeeMenu function
  module.exports = addEmployeeMenu;