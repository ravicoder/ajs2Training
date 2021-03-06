"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var emp_component_1 = require("./emp.component");
var emp_list_component_1 = require("./emp.list.component");
var emp_add_component_1 = require("./emp.add.component");
var common_1 = require("@angular/common");
var EmployeeService_1 = require("../Logics/EmployeeService");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [emp_component_1.EmployeeComponent, emp_list_component_1.EmployeeListComponent,
                emp_add_component_1.EmployeeAddComponent],
            exports: [emp_component_1.EmployeeComponent],
            providers: [{ provide: EmployeeService_1.EmployeeService,
                    useClass: EmployeeService_1.EmployeeService }]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=emp.module.js.map