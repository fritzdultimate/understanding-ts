abstract class Department {
    protected employees: string[] = [];
    constructor(protected readonly id: string, private readonly name: string) {
        // this.name = name;
    }

    static createEmployee(name: string) {
        return { name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
        console.log(this.name)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[] ) {
        super(id, 'IT');
    }

    describe() {
        console.log('bro')
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
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

    describe(this: Department): void {
        console.log('maka')
    }
}

const employee1 = Department.createEmployee('Darl');
console.log(employee1)

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

