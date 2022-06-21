const fs = require("fs");

const writeToFile = data => {
    fs.writeToFile("./output/index.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Website generated!")
        }
    })
}

module.exports = writeToFile;