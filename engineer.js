const Employee = require("./employee");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

class Engineer extends Employee {
    constructor(gitHubUserName, gitHubLink) {
        this.gitHubUserName = gitHubUserName;
        this.gitHubLink = gitHubLink;

        super(name, id, email, title)
        // get role override to return engineer
    }
    const writeFileAsync = util.promisify(fs.writeFile);

    function promptUser() {
        return inquirer.prompt([{
                type: "input",
                name: "gitHubuserName",
                message: "What is your employee's GitHub user name?"
            },
            {
                type: "input",
                name: "gitHubLink",
                message: "What is their GitHub Link?"
            },


        ]);
    }

    function generateHTML(answers) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">My id is ${answers.id}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is is ${answers.email}</li>
      <li class="list-group-item">My GitHub user name is ${answers.gitHubUserName}</li>
      <li class="list-group-item">My GitHub Link is is ${answers.gitHubLink}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
    }

    promptUser()
        .then(function (answers) {
            console.log(answers);
            const html = generateHTML(answers);

            return writeFileAsync("index.html", html);
        })
        .then(function () {
            console.log("Successfully wrote to index.html");
        })
        .catch(function (err) {
            console.log(err);
        });