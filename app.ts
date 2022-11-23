const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Darlington",
    age: 23,
    hobbies: ["Computer"],
    role: [8, "Project-manager"]
}

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

printResult(add(5, 7));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 9))