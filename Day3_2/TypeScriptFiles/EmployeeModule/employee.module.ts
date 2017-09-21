import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./employee.component"
import {EmployeeAddComponent} from "./employee.add.component"
import {EmployeeListComponent} from "./employee.list.component"
import {CommonModule} from "@angular/common"
import {EmployeeService, RealEmployeeService} from "../service/EmployeeService";

@NgModule({
    imports: [CommonModule],
    declarations: [EmployeeComponent, EmployeeAddComponent, EmployeeListComponent],
    exports: [EmployeeComponent],
    providers: [{provide:EmployeeService, useClass:RealEmployeeService}]
})
export class EmployeeModule {

}