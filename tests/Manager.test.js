const { default: test } = require("test");
const Manager = require("./Manager");


// grabbing the role from getRole();
test("role of employee", () => {
    const manager = new Manager("Nickolas", "thompsonnickolas1@gmail.com", 2816, 7);

    expect(manager.getRole()).toEqual("Manager");
});

// creating a manager object
test("creating a Manager object", () => {
    const manager = new Manager("nickolas", "thompsonnickolas1@gmail.com", 2816, 7)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});