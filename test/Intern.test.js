const Intern = require("../lib/Intern.js");

// creating the intern object
test("creating an intern object", () => {
    const intern = new Intern("Nickolas", "thompsonnickolas1@gmail.com", 2816, "UNC Charlotte");
});

// expecting the intern's school to match the string type
expect(Intern.school).toEqual("ASU");

// now we run the tests
// grabbing the intern's role through getRole();
test("grabbing the intern's role", () => {
    const intern = new Intern("Nickolas", "thompsonnickolas1@gmail.com", 2816, "UNC Charlotte")

    expect(intern.getRole()).toEqual("Intern");
});

// getting the intern's school
test("getting the intern's school", () => {
    const intern = new Intern("Nickolas", "thompsonnickolas1@gmail.com", 2816, "UNC Charlotte")

    expect(intern.getSchool).toEqual(stringContaining(intern.school.toString()));
});

