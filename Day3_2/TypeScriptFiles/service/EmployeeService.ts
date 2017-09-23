import {Employee} from "../model/Employee"

// Dummy logic until real logic is available
export class EmployeeService {
    employees:Array<Employee>;

    constructor() {
        this.employees = new Array<Employee>();
        this.employees.push(new Employee("a", 1));
        this.employees.push(new Employee("b", 2));
        this.employees.push(new Employee("c", 3));
    }

    getEmployees(): Array<Employee> {
        return this.employees;
    }

    saveEmployee(): void {
        this.employees.push(new Employee("New", 55));
    }
}

// Real logic to use whenever ready
export class RealEmployeeService {
    employees:Array<Employee>;

    constructor() {
        this.employees = new Array<Employee>();
        this.employees.push(new Employee("a1", 11));
        this.employees.push(new Employee("b1", 22));
        this.employees.push(new Employee("c1", 33));
    }

    getEmployees(): Array<Employee> {
        return this.employees;
    }

    saveEmployee(): void {
        this.employees.push(new Employee("New", 55));
    }
}