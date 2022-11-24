type Admin = {
    name: string;
    priviledge: string[]
}

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    priviledge: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return add.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('priviledge' in emp) {
        console.log('Priviledges: ' + emp.priviledge)
    }

    if('startDate' in emp) {
        console.log('Priviledges: ' + emp.startDate)
    }
}