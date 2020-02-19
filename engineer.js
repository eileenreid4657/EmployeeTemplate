const Employee = require("./employee");

class Engineer extends Employee {
    constructor(gitHubUserName) {
        this.gitHubUserName = gitHubUserName;

        super(name, id, email, title)
        // get role override to return engineer
    }
}