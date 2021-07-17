const fs = require("fs");

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync("./dist/index.html", data, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's 
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "Your HTML has been created!",
      });
    });
  };
// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./utils/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };


module.exports = {writeToFile, copyFile} ;