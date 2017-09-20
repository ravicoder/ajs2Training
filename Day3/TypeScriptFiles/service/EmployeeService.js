"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../model/Employee");
// Dummy logic until real logic is available
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = new Array();
        this.employees.push(new Employee_1.Employee("a", 1));
        this.employees.push(new Employee_1.Employee("b", 2));
        this.employees.push(new Employee_1.Employee("c", 3));
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.employees;
    };
    EmployeeService.prototype.saveEmployee = function () {
        this.employees.push(new Employee_1.Employee("New", 55));
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
// Real logic to use whenever ready
var RealEmployeeService = /** @class */ (function () {
    function RealEmployeeService() {
        this.employees = new Array();
        this.employees.push(new Employee_1.Employee("a1", 11));
        this.employees.push(new Employee_1.Employee("b1", 22));
        this.employees.push(new Employee_1.Employee("c1", 33));
    }
    RealEmployeeService.prototype.getEmployees = function () {
        return this.employees;
    };
    RealEmployeeService.prototype.saveEmployee = function () {
        this.employees.push(new Employee_1.Employee("New", 55));
    };
    return RealEmployeeService;
}());
exports.RealEmployeeService = RealEmployeeService;
//# sourceMappingURL=EmployeeService.js.map