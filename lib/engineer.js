const Employee = require("./employee");



class Engineer extends Employee {
    constructor(gitHub) {
        super(name, id, email, title)
        this.gitHubUserName = gitHubUserName;
        

        // get role override to return engineer
    };

    

    getgitHub() {
        return this.gitHub;
    }
    
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer
