// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";

    this.getName = function () {
        return this.name;
    };
    this.getId = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getOfficeNumber = function () {
        return this.officeNumber;
    };
    this.getRole = function () {
        return this.role;
    };
};

module.exports = Manager;