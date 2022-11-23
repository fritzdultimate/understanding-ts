"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name + ' ID: ' + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admin) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admin = admin;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.printReport = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee !== 'Kcee') {
            this.employees.push(employee);
        }
    };
    return AccountingDepartment;
}(Department));
var dept = new Department('d1', 'Frontend');
var it = new ITDepartment('d4', ['Mac']);
it.addEmployee('Darlington');
it.addEmployee('Franklin');
var accounting = new AccountingDepartment('d43', ['Something went wrong...']);
console.log(accounting.mostRecentReport);
accounting.addEmployee('Judith');
accounting.addEmployee('Christian');
accounting.addEmployee('Delphin');
accounting.addReport('We made $536m this year!');
accounting.printReport();
accounting.addEmployee('Kcee');
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Each employee is getting a brand new car';
console.log(accounting.mostRecentReport);
dept.describe();
console.log(it);
console.log(accounting);
//# sourceMappingURL=app.js.map