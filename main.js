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
var appendFileAsync = util.promisify(fs.appendFile);

function ManagerInfo() {
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
                name: "officeNumber",
                message: "What is their Office Number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email?"
            },
            {
                type: "list",
                name: "title",
                choices: ["Engineer", "Intern"],
                message: "What is their title?"

            },
            {
                type: "confirm",
                name: "repeat",
                message: "Would you like to add new employee?"
            }

        ])
        .then(answer => {
            console.log(answer);
            employees.push(answer);
            console.log(employees);

        });
}

function engineerInfo() {
    if (answer.choices[0] === "Engineer")
        return inquirer.prompt([{
                    type: "input",
                    name: "gitHub",
                    message: "What is your Git Hub Link?"
                },
                

            ])
            .then(answer => {
                    console.log(answer);
                    employees.push(answer);
                    console.log(employees);
                }

            )
        
engineerInfo();   

function internInfo() {
    if (answer.choices[1] === "Intern")
        return inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What is your Alma Mater?"
                },
              

            ])
            .then(answer => {
                    console.log(answer);
                    employees.push(answer);
                    console.log(employees);
                }

            )
        
internInfo();   









fs.writeFile("index.html", html, function (err) {
    if (err) {
        console.log(err);
    }
    if (answer.repeat) {
        fs.appendFile("index.html", html, function (err) {
            if (err) {
                console.log(err);
            }
        });
        ManagerInfo();
    }

});




ManagerInfo(employees);

module.exports = Employee