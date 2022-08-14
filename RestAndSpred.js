//Array Example of Rest and Spread Operator

//Rest operator
function addNumbers(num1, num2, ...rest) {
    console.log(rest);
    console.log(num1+num2);
}

const result = addNumbers(2, 3, 4, 5, 6);


//Spread operator
const names = ["John", "Denil", "Smith", "Ayan"];
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}
getNames(...names);

//Object Example of Rest and Spread Operator

//Rest
var students = {
    name: "John",
    age: 28,
    hobbies: ["Cricket", "Coding", "Obect Modeling"]
}
const {name, ...rest} = students;
console.log(rest, name);

//Spread
var newStudent = {
    ...students,
    age: 29
}
console.log(newStudent);