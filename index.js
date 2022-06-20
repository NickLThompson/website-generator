// dependencies
const { utils } = require("@jest/reporters");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./utils/Employee");
const Engineer = require("./utils/Engineer");
const Intern = require("./utils/Intern");
const Manager = require("./utils/Manager");

// empty array to add employees to print out
const team = [];

// adding a manager to the team, including questions and info
const addManager = () => {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the manager's name?"
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
    ])
        // 
        .then(managerInfo => {
            
            const { name, id, email, officeNumber } = managerInfo;

            const manager = new Manager(name, id, email, officeNumber);


            team.push(manager);
        })
}

// add each specific employee to the team
const addEmployee = () => {
    return inquirer.prompt([
        // choosing the type of employee
        {
            name: "employee",
            type: "list",
            message: "Which employee would you like to add?",
            choices: ["Engineer", "Intern"]
        },
        // asking all employees these 3 questions
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the employee's id?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the employee's email?",
        },
        // asks ALL employees these ^ three questions

        // only asks this if the employee is chosen as "Engineer", using the when statement
        {
            name: "github",
            type: "input",
            message: "What is the engineer's github username?",
            // when the input type from the employee list is chosen as "Engineer"
            when: (input) => input.employee === "Engineer"
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern go to?",
            // again, only prompts this questions when the chosen employee type is "Intern"
            when: (input) => input.employee === "Intern"
        },
        {
            name: "confirmAdd",
            type: "confirm",
            message: "Would you like to add another team member?",
            default: false
        }
    ])
    .then(employeeInfo => {
        // this is the employees info

        const { name, id, email, employee, github, school, confirmAdd } = employeeInfo;
        let engineer;
        let intern;

        if (employee === "Engineer") {
            engineer = new Engineer(name, id, email, github);

            team.push(engineer)

        } else if (employee === "Intern") {
            intern = new Intern (name, id, email, school);

            team.push(intern)
        }

        if (confirmAddEmployee) {
            return addEmployee(team);
        } else {
            return team;
        }
    })
}

addManager();