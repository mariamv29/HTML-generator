// packages needed to for this app
const inquirer = require("inquirer");
const generateTeam = require("../HTML-generator/utils/generate-team");
const { writeToFile, copyFile } = require("./src/generate-site");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray =[];

//  questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter your name'",
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
    type: "input",
    name: "managerId",
    message: "Enter the employee ID: ",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee ID:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "managerLink",
    message: "Enter your email address:",
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
      message: "Enter your office number:",
  },

]
// adding memeber to team 

const addMemberQuestions = 
    {
    type: "list",
    name: "newMember",
    message: "Would you like to add a memeber to your team?",
    choices: ["Yes", "No"],
};

const newMemberRole = {
        type: "list",
        name: "newRole",
        message: "Select the role of the new team member:",
        choices: ["Engineer", "Intern"],
};

// //Engineers inquirer prompt questions
const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "Enter the name of the engineer's name'",
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
      type: "input",
      name: "engineerId",
      message: "Enter the employee ID:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter employee ID:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerLink",
      message: "Enter the engineer's email address:",
    },

    {
      type: "link",
      name: "github",
      message: "Enter the GitHub username:",
    },
]

// //Intern inquirer prompt questions
const internQuestions = [
    {
      type: "input",
      name: "internName",
      message: "Enter the name of the intern's name'",
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
      type: "input",
      name: "internId",
      message: "Enter the employee ID: ",
      validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee ID:");
            return false;
          }
        },
    },
    {
      type: "input",
      name: "internLink",
      message: "Enter the intern's email address:",
    },

{
    type: "input",
    name: "school",
    message: "Enter intern's school name:",

  },
];

function init() {
  initManager();
}

// // // Function to initialize manager questions
function initManager() {
  inquirer.prompt(managerQuestions).then((response) => {
      let manager = new Manager(response.managerName, response.managerId, response.managerLink, response.officeNumber);
      teamArray.push(manager);
      console.log(manager)
      initTeamManager();
})
};

//Function to ask for a new member 
function initTeamManager() {
inquirer.prompt(addMemberQuestions).then((newMember) => {
    if(newMember.newMember === "Yes") {
        loopQuestions();
    } if(newMember.newMember === "No") {
        writeToFile("index.html", generateTeam(teamArray));
        console.log("Your team has been created!")
    }
});
}

// })

// function to loop through employee questions based on role 
function loopQuestions() {
    inquirer.prompt(newMemberRole).then((role) => {
        if(role.newRole === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) => {
                let engineer = new Engineer(response.engineerName, response.engineerId, response.engineerLink, response.github);
                teamArray.push(engineer);
                initTeamManager();
            });
        } else if (role.newRole === "Intern") {
            inquirer.prompt(internQuestions).then((response) => {
            let intern = new Intern(response.internName, response.internId, response.internLink, response.school);
            teamArray.push(intern);
            console.log(teamArray)
            initTeamManager(); 
        });
    }
});
}
init();
