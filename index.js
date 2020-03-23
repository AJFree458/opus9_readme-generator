const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
const api = require("./utils/api");

// username
// project title
// description of project
// license ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
// command to install dep
// command run tests
// Instructions
// How to contribute
// inquirer
//   .prompt([
//       {type: "input", name: "github", message: "What is your GitHub username?"},
//       {type: "input", name: "title", message: "What is your Project title?"},
//       {type: "input", name: "description", message: "Please give a short description of the project."},
//       {type: "list", name: "license", message: "What License would you like to use?", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]},
//       {type: "input", name: "install", message: "What command needs to be run to install dependencies?", default: "npm i"},
//       {type: "input", name: "test", message: "What command(s) should be run for tests?", default: "npm test"},
//       {type: "input", name: "usage", message: "What instructions does the user need to have to use the repo?"},
//       {type: "input", name: "contribute", message: "What does the user need to know about contributing to the repo?"}
//     ]).then((response) => {
//     console.log(response.github)
//     console.log(response.title)
//     console.log(response.description)
//     console.log(response.license)
//     console.log(response.install)
//     console.log(response.test)
//     console.log(response.usage)
//     console.log(response.contribute)
//     axios.get(`https://api.github.com/users/${response.github}`)
//       .then(data => {
//         console.log(data);
//         // data.data.login
//         // data.data.avatar_url
//         // data.data.email
//         // Add badges
//         // Write to file
// //         fs.writeFile("README.md", function(err) {
//   // if (err) {
//     // return console.log(err)
//   // }
//   // console.log("Done!")
// //         })
//       })
//   })
const questions = [
  {type: "input", name: "github", message: "What is your GitHub username?"},
  {type: "input", name: "title", message: "What is your Project title?"},
  {type: "input", name: "description", message: "Please give a short description of the project."},
  {type: "list", name: "license", message: "What License would you like to use?", choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]},
  {type: "input", name: "install", message: "What command needs to be run to install dependencies?", default: "npm i"},
  {type: "input", name: "test", message: "What command(s) should be run for tests?", default: "npm test"},
  {type: "input", name: "usage", message: "What instructions does the user need to have to use the repo?"},
  {type: "input", name: "contribute", message: "What does the user need to know about contributing to the repo?"}
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if (err) {
      return console.log(err);
    }
    console.log("SUCCESS!");
  })
}

function init() {
  inquirer
  .prompt(questions)
  .then(async (answers) => {
      try {
        // console.log(answers.github)
        // console.log(answers.title)
        // console.log(answers.description)
        // console.log(answers.license)
        // console.log(answers.install)
        // console.log(answers.test)
        // console.log(answers.usage)
        // console.log(answers.contribute)
        // Make a const for the GitHub Username
        const username = await api.getUser(answers.github);
        // console.log(username);
        // Assign the answers to a data variable
        const data = answers;
        // console.log(data);
        //Set the markdown
        const markDown = generate.generateMarkdown(data);
        // console.log(markDown);
        // Write it all to file
        writeToFile("README.md", markDown);            
      } catch(err){
        console.log(err);
      }
      })
}

init();