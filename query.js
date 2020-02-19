var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your id?",
      name: "id"
    },
    {
      type: "input",
      message: "Enter your employee's email:",
      name: "email"
    }
    {
      type: "input",
      message: "Enter your employee's title:",
      name: "email"
    }
  ])
  .then(function(answers) {

    
  });