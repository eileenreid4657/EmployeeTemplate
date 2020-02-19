const Employee = require("./employee");

class Engineer extends Employee {
    constructor(gitHubUserName, gitHubLink) {
        this.gitHubUserName = gitHubUserName;
        this.gitHubLink = gitHubLink;

        super(name, id, email, title)
        // get role override to return engineer
    }
    getgitHubUserName() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "gitHubUserName"
                },

            ])
        .then(function(answers));   
    }
    getgitHubLink() {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is your GitHub Link?",
                    name: "gitHubLink"
                },

            ])
        .then(function(answers));   
    }
}