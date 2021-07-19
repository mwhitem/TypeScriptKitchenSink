

let fullName: string = "Madison White";
console.log(fullName);


// US states
const numOfStates: number = 50;
console.log(numOfStates);


// addition
let add: number = 5 + 4;
console.log(add);


// hello world alert
function sayHello() {
  alert("Hello World");
}

sayHello();

// checking age
function checkAge(age: number, name: string) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}
checkAge(21, "charles");
checkAge(18, "james");
checkAge(27, "abby");
checkAge(17, "john");

// my favorite vegetables
let faveVegetables: Array<string> = [
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
let pet = {
  name: "Maggie",
  breed: "German Shepard",
};
console.log(pet);

// more names and ages to check

let peopleInfo = [
  { name: "raven", age: 32 },
  { name: "lizzie", age: 19 },
  { name: "hannah", age: 25 },
  { name: "miranda", age: 21 },
  { name: "chelsea", age: 17 },
];

for (let index = 0; index < peopleInfo.length; index++) {
  checkAge(peopleInfo[index].age, peopleInfo[index].name);
}