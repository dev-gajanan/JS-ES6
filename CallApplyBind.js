// Apply, Call and Bind in JS

let userDetails = {
    name: "John Smith",
    age: 28,
    Designation: "Software Engineer",
    printName: function() {
        console.log("Name is:",this.name);
    }
}

let userDetails2 = {
    name: "Denil",
    age: 29,
    Designation: "Software Engineer"
}

let printAge = function() {
    console.log("Age is:",this.age);
}

let printDetails = function(state, country) {
    console.log(this.name, state, country);
}

userDetails.printName();
//Use of call (We can call this is function borrowing)
userDetails.printName.call(userDetails2);

//Method 2nd ==> if we have a generic method that is outside of object then we can call like this;
printAge.call(userDetails);
printAge.call(userDetails2);

//Call with parameters
printDetails.call(userDetails, "Odisha", "India");
printDetails.call(userDetails2, "Odisha", "India");

//Use of apply
//So in apply what heppen, we can pass parameter as a array list instead of passing one by one that we done in call
printDetails.apply(userDetails, ["Odisha", "India"]);


//Use of Bind
//Bind is similar to call, but in call we can call direct function and in bind we can make a copy and whenever needed call 
let copyPrintDetails = printDetails.bind(userDetails, "Odisha", "India");
copyPrintDetails();