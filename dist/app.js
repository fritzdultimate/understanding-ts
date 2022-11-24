"use strict";
var e1 = {
    name: 'Max',
    priviledge: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return add.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('priviledge' in emp) {
        console.log('Priviledges: ' + emp.priviledge);
    }
    if ('startDate' in emp) {
        console.log('Priviledges: ' + emp.startDate);
    }
}
//# sourceMappingURL=app.js.map