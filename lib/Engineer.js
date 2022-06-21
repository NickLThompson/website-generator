const Employee = require("../lib/Employee")


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // overriding the role for engineer since its a specific employee type
    getRole() {
        return "Engineer"
    }

    // grabbing the engineer's github
    getGithub() {
        return this.github;
    }


}

module.exports = Engineer;