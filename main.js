const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const fs = require("fs");
const util = require("util");
var employees = [];
var writeFileAsync = util.promisify(fs.writeFile);
var appendFileAsync = util.promisify(fs.appendFile);
    function managerInfo() {
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
                name: "email",
                message: "What is their email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?"
            },
            // {
            //     type: "confirm",
            //     name: "repeat",
            //     message:"Would you like to add new employee?"
            // }
            
        ])
        .then(answer=> {
            console.log(answer);

                const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
                employees.push(manager);
            chooseTeam();
        }) 
managerInfo();



function chooseTeam() {
    inquirer
      .prompt([
        {
            type: "list",
            name: "title",
            choices: ["Engineer","Intern", "None"],
            message: "Assemble your team!!! What is the title?"
        }
      ]).then(answer => {
          switch(answer.title){
            case "Engineer":
                engineerInfo();
                break;
            case "Intern": 
                internInfo();
                break;
            case "None":
                console.log(employees);
                teamEnd();
                break;
        }
    })
}

function engineerInfo() {
    inquirer
    .prompt([{
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
        name: "email",
        message: "What is their email?"
    },
    
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub Link?"
    }

    ]).then(answer => {
        console.log(answer)
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.officeNumber);
                employees.push(engineer);

        chooseTeam();
        
    })
}

function internInfo() {
    inquirer
    .prompt([{
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
        name: "email",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your Alma Mater?"
    }

    ]).then(answer => {
        console.log(answer);

        const intern = new Intern(answer.name, answer.id, answer.email, answer.officeNumber);
                employees.push(intern);
        chooseTeam();

    })
}


            console.log(employees);
        //     var html = `<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        //     <link rel="stylesheet" href="style.css">
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script></head>
        //     <body><div class="jumbotron">
        //     <h1 class="text-center">` + "My Awesome Team!!!" + `</h1>
        // </div><div class="card">
        //     <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
        //     <div class="card-body">
        //       <h4 class="card-title">${answer.name}</h4>
        //       <p class="card-text">
        //       This employee is our ${answer.title}, whose Id is ${answer.id}.</n>
        //       You can contact this person at ${answer.email}. 
        //       </p>
              
        //     </div>
        //   </div></body></html>`;
            
            
            
function teamEnd(){
    fs.writeFile(
        __dirname + '/Develop/output/team.html', render(employees),
        
        function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
        }
    );
    };
      
           
     
        
        };
        managerInfo(); 
    

