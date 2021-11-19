const inquirer = require("inquirer");
const sectionOptions = require("./departmentoptions");
const employeeOptions = require("./employeeoptions");
const addPositionOptions = require("./positionoptions");
const allSections = require("../library/allSections");
const allPositions = require("../library/allPositions");
const seeAllEmployees = require("../library/allEmployees");
const updatePositionOptions = require("./newpositionoptions");

const questions = [
    {
        type: "list",
        name: "indexChoice",
        message: "What would you like to do at the moment?",
        choices: ["View All Sections", "View All Positions", "View All Employees", "Add A Section", "Add A Position", "Add An Employee", "Update An Employee Position"]
    }
];

function indexOptions () {
    inquirer.prompt(questions).then((data) => {
        switch (data.indexChoice) {
            case "View All Sections":
                allSections();
                break;
            case "View All Positions":
                allPositions();
                break;
            case "View All Employees":
                seeAllEmployees();
                break;
            case "Add A Department":
                sectionOptions();
                break;
            case "Add A Role":
                addPositionOptions();
                break;
            case "Add An Employee":
                employeeOptions();
                break;
            case "Update An Employee Role":
                updatePositionOptions();
                break;
        
            default:
                console.log("error")
                break;
        }
    })
}
module.exports = indexOptions