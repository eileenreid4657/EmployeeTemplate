const inquirer = require("inquirer");
const Renderer = require("./lib/htmlRenderer");
const fs = require("fs");
const util = require("util");

class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    const writeFileAsync = util.promisify(fs.writeFile);

    function promptUser() {
        return inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is your employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their id?"
            },
            {
                type: "input",
                name: "title",
                message: "What is their title?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email?"
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
    <i class="fas fa-mug-hot"></i>
    <div class="card-body">
        <h4 class="card-title">Hi! My name is ${answers.name}</h4>
        
        <p class="lead">My id is ${answers.id}.</p>
        <p class="lead">My role is "Employee"</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
        <li class="list-group-item">My email is is ${answers.email}</li>
        
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

    module.export = Employee;