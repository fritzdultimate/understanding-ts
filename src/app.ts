class Department {
    protected employees: string[] = [];
    constructor(private readonly id: string, private readonly name: string) {
        // this.name = name;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name + ' ID: ' + this.id )
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[] ) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }
    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value')
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReport() {
        console.log(this.reports);
    }

    override addEmployee(employee: string): void {
        if(employee !== 'Kcee') {
            this.employees.push(employee)
        }
    }
}

const dept = new Department('d1', 'Frontend');
const it = new ITDepartment('d4', ['Mac']);
it.addEmployee('Darlington');
it.addEmployee('Franklin');

const accounting = new AccountingDepartment('d43', ['Something went wrong...']);
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