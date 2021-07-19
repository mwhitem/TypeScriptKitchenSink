"use strict";
var fullName = "Madison White";
console.log(fullName);
// US states
var numOfStates = 50;
console.log(numOfStates);
// addition
var add = 5 + 4;
console.log(add);
// hello world alert
function sayHello() {
    alert("Hello World");
}
sayHello();
// checking age
function checkAge(age, name) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge(21, "charles");
checkAge(18, "james");
checkAge(27, "abby");
checkAge(17, "john");
// my favorite vegetables
var faveVegetables = [
    "broccoli",
    "brussel sprouts",
    "carrots",
    "zucchini",
    "cucumber",
];
for (var index = 0; index < faveVegetables.length; index++) {
    console.log(faveVegetables[index]);
}
// pet object
var pet = {
    name: "Maggie",
    breed: "German Shepard",
};
console.log(pet);
// more names and ages to check
var peopleInfo = [
    { name: "raven", age: 32 },
    { name: "lizzie", age: 19 },
    { name: "hannah", age: 25 },
    { name: "miranda", age: 21 },
    { name: "chelsea", age: 17 },
];
for (var index_1 = 0; index_1 < peopleInfo.length; index_1++) {
    checkAge(peopleInfo[index_1].age, peopleInfo[index_1].name);
}
