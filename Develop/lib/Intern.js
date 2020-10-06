// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee
const Employee = require('./Employee')

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.role = "Intern";

    this.getName = function () {
        return this.name;
    };
    this.getId = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getSchool = function () {
        return this.school;
    };
    this.getRole = function () {
        return this.role;
    };
};

module.exports = Intern;