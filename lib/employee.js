const inquirer = require("inquirer");
const Renderer = require("./htmlRenderer");
const fs = require("fs");
const util = require("util");

class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getTitle() {
        return this.title;
    }
    getRole() {
        return "Employee";
    }
    
}

module.exports = Employee