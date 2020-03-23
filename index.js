const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// username
// project title
// description of project
// license ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
// command to install dep
// command run tests
// Instructions
// How to contribute
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    }
  ]).then((response) => {
    console.log(response.github)
    axios.get(`https://api.github.com/users/${response.github}`)
      .then(data => {
        console.log(data);
        // data.data.login
        // data.data.avatar_url
        // data.data.email
        // Add badges
        // Write to file
//         fs.writeFile("README.md", function(err) {
//         })
      })
  })
// const questions = [
//   {type: "input", name: "title", message: "What is your Project title?"},
//   {type: "input", name: "description", message: "Please give a short description of the project."},
//   {type: "list", name: "license", message: "What License would you like to use?", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]},
//   {type: "input", name: "install", message: "What command needs to be run to install dependencies?", default: "npm i"},
//   {type: "input", name: "test", message: "What command(s) should be run for tests?", default: "npm test"},
//   {type: "input", name: "usage", message: "What instructions does the user need to have to use the repo?"},
//   {type: "input", name: "contribute", message: "What does the user need to know about contributing to the repo?"}
// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();