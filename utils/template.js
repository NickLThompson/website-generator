// manager card
const generateManager = manager => {
    return `
    <div class="col-4 mt-4 h-100">
                    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">
                            <h2>${manager.name}</h2>
                            <h4>Manager</h4>

                            <div class="card-body">
                                <p class="id">ID: ${manager.id}</p>
                                <p class="email">Email: <a href=${manager.email}>${manager.email}</a></p>
                                <p class="officeNumber">Office number: ${manager.officeNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
}
// engineer card 1
const generateEngineer = engineer => {
    return `
    <div class="col-4 mt-4 h-100">
                    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-header">
                            <h2>${engineer.name}</h2>
                            <h4>Engineer</h4>

                            <div class="card-body">
                                <p class="id">ID: ${engineer.id}</p>
                                <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
                                <p class="github">Github: <a href = "https://github.com/${engineer.github}">${engineer.github}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}
// intern card 
const generateIntern = intern => {
    return `
    <div class="col-4 mt-4 h-100">
                    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                        <div class="card-header">
                            <h2>${intern.name}</h2>
                            <h4>Intern</h4>

                            <div class="card-body">
                                <p class="id">ID: ${intern.id}</p>
                                <p class="email">Email: <a href="${intern.email}">${intern.email}</a></p>
                                <p class="school">School: ${intern.school}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
}

const generateWebsite = data => {

    let cardsArray = [];

    for (let i = 0; i < cardsArray.length; i++) {
        const employee = data[i]
        const role = employee.getRole();


        if (role === "Manager") {
            const managerCard = generateManager(employee);

            cardsArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            cardsArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);

            cardsArray.push(internCard);
        }
    }

    const employeeCards = cardsArray.join("");

    const generateTeam = generateTeamHTML(employeeCards);
    return generateTeam;
};

const generateTeamHTML = (employeeCards => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Website Generator</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-dark bg-danger">
            <!-- Navbar content -->
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="cards">
            ${employeeCards}
            </div>
        </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
    `;
})

module.exports = generateWebsite;