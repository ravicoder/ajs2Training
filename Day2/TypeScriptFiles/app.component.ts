import {Component} from "@angular/core"

@Component({
    selector: "my-header",
    //template: "<h1>Hello from component</h1>"
    templateUrl: "./app.component.html"
})
export class AppComponent {
    empName: String;
    salary: number;
    constructor() {
        this.empName = "Gust";
        this.salary = 25000;
    }

    increment(): void {
        this.salary = this.salary + 500;
    }
}