const Employee = require("./Employee");

// the constructor here in the manager class is extending from the employee class constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // now we have to override the employee role when talking about the manager
    getRole() {
        return "Manager";
    }
}


module.exports = Manager;