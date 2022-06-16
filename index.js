// dependencies
const inquirer = require("inquirer");

// 
const questions = [
    {
        name: "tmName",
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

inquirer.prompt(questions);