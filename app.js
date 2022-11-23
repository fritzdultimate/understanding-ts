var person = {
    name: "Darlington",
    age: 23,
    hobbies: ["Computer"],
    role: [8, "Project-manager"]
};
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 7));
var combineValues;
combineValues = add;
console.log(combineValues(8, 9));
