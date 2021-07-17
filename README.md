# HTML-generator

## Description 
The HTML-generator is an application that allows a user to input via the command line to generate an HTML page by using NODe.js and Obeject-Oriented Programing while also running failed test. 

## Screenshot 
![screenshot]()


### Full movie
[movie]()



## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated



## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

`npm install` >
`npm inquirer` 

## Usage 

To use the HTML-Generator:
1. Open the terminal.
2. While in the root of your directory run `node index.js` command.
3. Answer inquirer promp questions.
4. Index.html under "dist" folder will be updated with the unser input.


---

## Contributing / Credits

[mariamv29]()
