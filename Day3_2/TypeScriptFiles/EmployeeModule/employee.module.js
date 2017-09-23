"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_component_1 = require("./employee.component");
var employee_add_component_1 = require("./employee.add.component");
var employee_list_component_1 = require("./employee.list.component");
var common_1 = require("@angular/common");
var EmployeeService_1 = require("../service/EmployeeService");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [employee_component_1.EmployeeComponent, employee_add_component_1.EmployeeAddComponent, employee_list_component_1.EmployeeListComponent],
            exports: [employee_component_1.EmployeeComponent],
            providers: [{ provide: EmployeeService_1.EmployeeService, useClass: EmployeeService_1.RealEmployeeService }]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map