// dependencies
const { utils } = require("@jest/reporters");
const inquirer = require("inquirer");
const Employee = require("./utils/Employee")

// 
const questions = [
    {
        name: "name",
        type: "input",
        message: "What is your team manager's name?"
    },
    {
        name: "ID",
        type: "input",
        message: "What is their employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is their email address?"
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is their office number?"
    },
]

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    
})

