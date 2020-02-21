const Employee = require("./employee");


class Engineer extends Employee {
    constructor(gitHubUserName, gitHubLink) {
        super(name, id, email, title)
        this.gitHubUserName = gitHubUserName;
        this.gitHubLink = gitHubLink;

        // get role override to return engineer
    }

    getgitHubUserName() {
        return this.gitHubUserName;
    }
    getgitHubLink() {
        return this.gitHubLink;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer
