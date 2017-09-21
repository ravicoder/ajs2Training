import {Component} from "@angular/core"
import { EmployeeService } from "../service/EmployeeService";

@Component({
    selector:'employee-add',
    templateUrl:'./employee.add.component.html'
})
export class EmployeeAddComponent {
    constructor(private empLogic:EmployeeService) {
    }

    saveEmployee(): void {
        this.empLogic.saveEmployee();
    }
}