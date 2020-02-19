const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email, title)
        // get role override to return intern
    }
    getSchool() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What school is this intern from?",
                    name: "school"
                },

            ])
        .then(function(answers));   
}
getRole() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is the intern's role?",
                name: "role"
            },
            // this gets overridden to return "intern"

        ])
    .then(function(answers));   
}
}