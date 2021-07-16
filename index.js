// packages needed to for this app 
const inquirer = require("inquerer");
const fs = require('fs');


//Array of questions for user input 
const teamQuestions = () => {
    return inquirer.prompt( [
    {
        type: "input",
        name: "name",
        message: "Enter the team member's name",
    },

    {
        type: "input",
        name: "name",
        message: "Enter the team member's ID",
    },
    {
        type: "input",
        name: "name",
        message: "Enter the team member's GitHub",
    },
    ])
}
teamQuestions();
// // // Create a function to initialize app
// function initialize() 
// {
//     return inquirer.prompt(teamQuestions).then(inquirerData)
//         console.log("html created")
// }

// // // Function call to initialize app
// initialize();