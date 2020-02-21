const Employee = require("./employee");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email, title)


    }
    
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}   
    module.exports = Manager

