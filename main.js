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
            {
                type: "confirm",
                name: "repeat",
                message:"Would you like to add new employee?"
            }
            
        ])
        .then(answer=> {
            console.log(answer);
            employees.push(answer);
            console.log(employees);

            var html = `<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="style.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></head>
            <body><div class="jumbotron">
            <h1 class="text-center">` + "My Awesome Team!!!" + `</h1>
        </div><div class="card">
            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">${answer.name}</h4>
              <p class="card-text">
              This employee is our ${answer.title}, whose Id is ${answer.id}.</n>
              You can contact this person at ${answer.email}. 
              </p>
              <a href="#!" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></body></html>`;
            
            
            
            fs.writeFile("index.html",html,function(err){
                if(err){
                    console.log(err);
                }
                if(answer.repeat){
                    fs.appendFile("index.html",html,function(err){
                        if(err){
                            console.log(err);
                        }
                    });
                    promptUser();
                }
    
            });

            // if(answer.repeat){
            //     promptUser();
            // }
           

     

        
        });

  

    }

promptUser(employees);

module.exports = Employee

    