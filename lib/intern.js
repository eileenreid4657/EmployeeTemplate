const Employee = require("./employee");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email, title)
        // get role override to return intern
    }
    getschool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}    
    module.exports = Intern
    