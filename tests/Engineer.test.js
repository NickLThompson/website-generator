const { default: test } = require("test");
const Engineer = require("./Engineer")

// creating an engineer object
test("creating an engineer object", () => {
    const engineer = new Engineer("Nickolas", "thompsonnickolas1@gmail.com", 2816);
});

    // expecting the engineer github to match to the type
    expect(Engineer.github).toEqual(expect.any(String));

    // getting the info of engineer from getRole();
    test("grabbing engineer role", () => {
        const engineer = new Engineer("Nickolas", "thompsonnickolas1@gmail.com", 2816, "NickLThompson")

        expect(engineer.getRole()).toEqual("Engineer");
    });

    // getting the engineer's github from getGithub
    test("grabbing engineer github", () => {
        const engineer = new Engineer("Nickolas", "thompsonnickolas1@gmail.com", 2816, "NickLThompson")

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });
    