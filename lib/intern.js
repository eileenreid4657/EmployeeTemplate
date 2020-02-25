const Employee = require("./employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;

        
        // get role override to return intern
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    
}    
    module.exports = Intern
    