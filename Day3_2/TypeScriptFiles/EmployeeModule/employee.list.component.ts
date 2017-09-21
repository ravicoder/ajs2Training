import {Component} from "@angular/core"
import { Employee } from "../model/Employee";
import { EmployeeService } from "../service/EmployeeService";

@Component({
    selector:'employee-list',
    templateUrl:'./employee.list.component.html'
})
export class EmployeeListComponent {
    employees: Array<Employee>;

    constructor(private empLogic:EmployeeService) {
        this.employees = this.empLogic.getEmployees();
    }

}