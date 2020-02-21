const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");


const inquirer = require("inquirer");
const Renderer = require("./lib/htmlRenderer");
const fs = require("fs");
const util = require("util");

var employees = [];

var writeFileAsync = util.promisify(fs.writeFile);



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
                type: "list",
                name: "title",
                choices: ["engineer","manager","intern"],
                message: "What is their title?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email?"
            },
            
        ])
        .then(answer=> {
            console.log(answer);
            employees.push(answer);
            console.log(employees)

     

        
        });

  

    }

promptUser(employees);

module.exports = Employee

    