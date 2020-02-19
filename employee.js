class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    // getName, getId, getEmail, getRole Returns Employee
    getName() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is your name?",
                    name: "username"
                },

            ])
        .then(function(answers));   
    }
    getId() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is the employee's id?",
                    name: "id"
                },

            ])
        .then(function(answers));   
    }
    getEmail() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is the employee's email?",
                    name: "email"
                },

            ])
        .then(function(answers));
    }
    getRole() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is the employee's role?",
                    name: "role"
                    //  this should return 'employee'
                },

            ])
        .then(function(answers));   
    }

module.export = Employee;