import {Component} from "@angular/core"
import {Employee} from "../model/Employee"
import {EmployeeService, RealEmployeeService} from "../service/EmployeeService"

@Component({
    selector: "my-header",
    templateUrl: "./app.component.html",
    providers: [{provide:EmployeeService, useClass:RealEmployeeService}]
})
export class AppComponent {
    employees: Array<Employee>;
    showAddForm: boolean;

    constructor(private empLogic:EmployeeService) {
        this.employees = this.empLogic.getEmployees();
        this.showAddForm = false;
    }

    showAddEmployee(): void {
        this.showAddForm = true;
    }

    cancel(): void {
        this.hideAddForm();
    }

    hideAddForm(): void {
        this.showAddForm = false;
    }
}
