// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
    this.role = "Engineer";

    this.getName = function () {
        return this.name;
    };
    this.getId = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getGithub = function () {
        return this.github;
    };
    this.getRole = function () {
        return this.role;
    };
};

module.exports = Engineer;