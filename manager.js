const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email, title)
        // get role override to return manager

    }
    getRole() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is the employee's role?",
                    name: "role"
                    // this is supposed to be overridden to 'Manager'
                },

            ])
        .then(function(answers));   
}