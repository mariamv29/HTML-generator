// packages needed to for this app
const inquirer = require("inquirer");
const generateTeam = require("../HTML-generator/utils/generate-team");
const {writeToFile, copyFile} = require ("./src/generate-site");
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Empty array to create team 
const teamArr = [];

// Manager questions 
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the name of the manager for this team:",
    validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
  },

  {
    type: "list",
    name: "role",
    message: "Select your role",
    choices:["Manager", "Engineer", "Intern"],
    validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please select your role!");
          return false;
        }
      },
  },

  {
    type: "input",
    name: "manageId",
    message: "Enter the manager's ID: ",
    validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter manager's ID");
          return false;
        }
      },
  },
  {
    type: "input",
    name: "link",
    message: "Enter the manager's email address:",
    validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please manager's email:");
          return false;
        }
      },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your manager's office number:",
    validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your office number");
          return false;
        }
      },
    },
   {
    type: "confirm",
    name: "confirmAddMemeber",
    message: "Would like to add any members to your team?",
    default: false, 
   },
];

//Engineers inquirer prompt questions 
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: '',
    }, 
    {
        type: "link",
        name: "githubLink",
        message: "Enter the GitHub :",
        validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your office number");
              return false;
            }
          },
      },
    
]


// // Create a function to initialize app
function initialize() {
  inquirer.prompt(managerQuestions).then(inquirerData => {
    console.log("HTML created")
    writeToFile("README.md", generateTeam( inquirerData))
})
.catch(err => {
    console.log(err)
})
}

// // Function call to initialize app
initialize();
