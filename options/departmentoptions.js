const inquirer = require("inquirer");
const addSections = require("../library/section");

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
module.exports = addSectionOptions;