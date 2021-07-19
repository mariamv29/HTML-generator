const fs = require("fs");


// TODO: Create a function to write README file
const writeToFile = (fileName, teamArray) => {
    return fs.writeFileSync("./dist/index.html", teamArray, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's
      if (err) {
        return err;
      }
    });
  };
// copying file
const copyFile = () => {
  fs.copyFile("./utils/style.css", "./dist/style.css", (err) => {
    if (err) {
      return err;
    }
  });
};
module.exports = { writeToFile, copyFile };
