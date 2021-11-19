//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addEmployee = require("../library/employee");

const liveSections = [];
const liveSectionsID = {};
const positions = [];
const livePositions = [];
const livePositionsID = {};
const livePositionSectionID = {};

const questions = [
    {
      type: "input",
      name: "firstName",
      message: "What is the persons first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the persons last name?",
    },
    {
      type: "list",
      name: "department",
      message: "Which Department?",
      choices: liveSections,
    },
  ];

  const whichPosition = [
    {
      type: "list",
      name: "role",
      message: "What Role?",
      choices: positions
    },
    {
      type: "input",
      name: "manager",
      message: "Who is the Manager?",
    }
  ]

  function EmployeeOptions() {
    //Calling database connection
    const db = require("../config/connection");
    //pre-written sql statements
    const sql = "SELECT * FROM sections";
    const sql2 = "SELECT * FROM positions";
    //using mysql2 to query the database specified in ../config/connections.js
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      //itterating through and storing each entry in result
      for (const key in results) {
        const element = results[key];
        liveSections.push(element.section_name)
        liveSectionsID[element.section_name] = element.id
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
        livePositions.push(element.position_name)
        livePositionsID[element.position_name] = element.id
        livePositionSectionID[element.position_name] = element.position_section_id
      }
    });
    
    inquirer.prompt(questions).then((data) => {
      const employee = {};
      employee.sectionId = liveSectionsID[data.department];
      employee.position = 0;
      for (const key in livePositionSectionID) {
          const element = livePositionSectionID[key];
          if (element == employee.sectionId) {
            positions.push(key)
          }
      }

      inquirer.prompt(whichPostion).then((positionData) => {
        employee.position = livePositionSectionID[positionData.position]
        addEmployee(data.firstName, data.lastName, employee.position, employee.sectionId, positionData.manager);
      });
    });
  }
  //exporting the addEmployeeMenu function
  module.exports = EmployeeOptions;