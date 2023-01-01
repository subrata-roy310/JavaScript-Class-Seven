// JavaScript object
// Array Example
// const userArray = ["Subrat", "Roy", 2017, "One"]
// console.log(userArray);

// // object Example
// const userObject = {
//     firstName: "Subrata",
//     lastName: "Roy",
//     birthYear: 2017,
//     className: "One"
// };
// console.log(userObject);
// console.log(userObject["firstName"]);
// console.log(userObject.firstName);
// console.log(userObject.className);

// // Add new item
// // Example One
// userObject.hobby = "Drowing";
// console.log(userObject);
// console.log(userObject.hobby);

// userObject.eating = "Fish"
// console.log(userObject);
// console.log(userObject.eating);

// // Example Two
// userObject["birthPlase"] = "Khulna";
// console.log(userObject["birthPlase"]);

// Another Object Example
// const userObjectTwo = {
//     firstname: "Subrata",
//     lastName: "Roy",
//     inJob: true,
//     calculateAge: function (birthYear) {
//         return 2022 - birthYear;
//     }
// }
// console.log(userObjectTwo.inJob);
// console.log(userObjectTwo.calculateAge(1980));
// console.log(userObjectTwo["calculateAge"](1989));

// This keyword
// const userObjectTwo = {
//     firstname: "Subrata",
//     lastName: "Roy",
//     birthYear: 1988,
//     inJob: true,
//     calculateAge: function () {
//         return 2022 - this.birthYear;
//     },
//     userDetails: function () {
//         return `This is user ${this.firstname} ${this.lastName}, born in ${this.birthYear}`;
//     }
// }
// console.log(userObjectTwo.userDetails());
// console.log(userObjectTwo.calculateAge());


// JavaScript Loop
// For loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for (let task = 1; task <= 3; task++) {
//     console.log(`Task ${task}`);
// }

// for (let i = 1; i <= 30; i++) {
//     console.log(`Task ${i}`);
// }

// While loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");


// let i = 1;
// while (i <= 8) {
//     console.log(`Task ${i}`);
//     i++;
// }

// // Arry
// const newArray = [
//     "Data 1",
//     "Data 2",
//     "Data 3",
//     "Data 4",
//     "Data 5",
//     "Data 6",
//     "Data 7",
//     "Data 8",
// ];
// console.log(newArray);
// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[3]);
// // console.log(newArray[4]);

// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i]);
// };

// for (let i = newArray.length - 1; i >= 0; i--) {
//     console.log(newArray[i]);
// }

// Loop brack
// for (let i = 0; i < newArray.length; i++) {
//     if (i == 4) break;
//     console.log(newArray[i]);
// };

// Loop Continue
// for (let i = 0; i < newArray.length; i++) {
//     if (i == 4) continue;
//     console.log(newArray[i]);
// };


// Arry
const newArray = [
    "Data 1",
    "Data 2",
    "Data 3",
    "Data 4",
    "Data 5",
    "Data 6",
    "Data 7",
    "Data 8",
];
console.log(newArray);

// Indexof
console.log(newArray.indexOf("Data 7"));
console.log(newArray.indexOf("Data 2"));
console.log(newArray.indexOf("Data 9"));

// includes
console.log(newArray.includes("Data 5"));
console.log(newArray.includes("Data 9"));