const Employee = require("./employee");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email, title)


    }
    const writeFileAsync = util.promisify(fs.writeFile);

    function promptUser() {
        return inquirer.prompt([{
                type: "input",
                name: "officeNumber",
                message: "What is the Office Number?"
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
  <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
  <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<h1 class="display-4">This is my team!</h1>
</div>
    <div class="container">
        <div class="card">
        <i class="fas fa-bullhorn"></i>
        <div class="card-body">
            <h4 class="card-title">Hi! My name is ${answers.name}</h4>
        <p class="lead">My id is ${answers.id}.</p>
        <p class="lead">My role is as "Manager"</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">My office number is ${answers.officeNumber}</li>
        <li class="list-group-item">My email is ${answers.email}</li>
        
        </ul>
    </div>
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