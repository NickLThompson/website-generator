// allowing testing and bringing the employee constructor
const Employee = require("../lib/Employee.js");

test("creating an employee object", () => {
    const employee = new Employee("Nickolas", "thompsonnickolas1@gmail.com", 2816);

    // expecting the employee name, id, and email to equal what they are in the test; string, number, and string
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// grabbing the name from getName();
test("gets employee name", () => {
    const employee = new Employee("Nickolas", "thompsonnickolas1@gmail.com", 2816);

    expect(employee.getName()).toEqual(expect.any(String));
});

// grabbing the email from getEmail();
test("gets employee email", () => {
    const employee = new Employee("Nickolas", "thompsonnickolas1@gmail.com", 2816);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// grabbing the id from getid();
test("gets employee id", () => {
    const employee = new Employee("Nickolas", "thompsonnickolas1@gmail.com", 2816);

    expect(employee.getid).toEqual(expect.any(Number));
});

// grabbing the role from getRole();
test("gets employee role", () => {
    const employee = new Employee("Nickolas", "thompsonnickolas1@gmail.com", 2816);

    expect(employee.getid()).toEqual("Employee");
});