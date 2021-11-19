//inquirer
const inquirer = require("inquirer");
//AddADepartment
const addADepartment = require("../library/section");

const questions = [
    {
        type: "input",
        name: "newDepartment",
        message: "What department do you want to add?"
    }
];

function addSectionOptions () {
    
    inquirer.prompt(questions).then((data) => {
        addSections(data.newSection);
    })
};
//exporting the addDepartmentMenu function
module.exports = addSectionOptions;