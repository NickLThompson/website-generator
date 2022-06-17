const Employee = require("./employee")

const engineerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the engineer's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is the engineer's ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the engineer's email?",
    },
    {
        name: "github",
        type: "input",
        message: "What is the engineer's github username?"
    },
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github;
    }

    
}