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