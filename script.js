const btn = document.getElementById("btn");

btn.addEventListener("click", function greeting () {
    window.alert('Welcome to class, Itunu, Tomi and Abiola');
    
})

let myVariable = 4 + 4;

console.log(myVariable)

// This is a single-line comment


/* 
This is a multi-line comment
Welcome to today's class
I hope you understand me?

*/

let firstTrainee = "Itunuoluwa"; // This is a statement


/*
    Variables and Values

    Ways to declare a variable:
        1. var - declare, redeclare, initialize and reassign. Don't use
        2. let - declare, initialize and reassign
        3. const - declare constant values
*/
myVariable = 2

console.log(myVariable);

var myClass = "Software Development";

var myClass = "Data Analytics";

let myLocation = "Top floor, Christore Building";
console.log(myLocation);

myLocation = "Adebayo Street"
console.log(myLocation);

const pi = 22 / 7;
console.log("pi:", pi);

let username; // Declaration
username = "AB" // Initialization
username = "Itunes" // Reassignment

const userEmail = "example@gmail.com";
// userEmail = "admin@gmail.com"

/* 
    Variable Naming Rules
        1. The variable name should be related to its value.
        2. Don't redeclare a variable using let or const.
        3. When using a multiple word variable, use your camelCase, PascalCase or snake_case.
        4. Varible name cannot be a reserved/key word
        5. You cannot start a variable name with a number 
        6. You cannot start your variable name with a symbol except the underscore(_) or the dollar sign ($).
*/

let myName = "Ayodeji";

let myAge = 15;

// camelCase
let favoriteColor = "red";
let myFavoriteLocation = "my room";

// PascalCase
let FavoriteColor = "blue";
let MyFavoriteLocation = "Amusement Park";

// snake_case
let favorite_color = "green";
let my_favorite_location = "National Park";

/* 
    Values - Datatypes
        1. Primitive Datatypes
            a. number
            b. string 
            c. boolean
            d. undefined
            e. null
            f. symbol
            g. BigInt
        2. Non-primitive or Complex or Reference-type Datatypes
            a. array
            b. object
            c. function
            d. Date ()



*/

let introduction = "My name is Ayodeji, I am a software developer.";
console.log(typeof(introduction));

let isMarried = false;
console.log(typeof(isMarried));

let myCar;

console.log(typeof(myCar));

let myUsername = null;
console.log(typeof(myUsername));


// Non-primitive Datatypes

// Array
const trainees = ["Itunuoluwa", "Oluwatomi", "Abiola", "Emmanuel", "Ayomide", "Samuel"];

console.log(trainees);
console.log(typeof(trainees));

const dreamCar = {
    brand: "Tesla", 
    model: "Cybertruck", 
    color: "black", 
    mileage: 0,
    isAccidented: false,

};

const premiumTrainees = [
    {name: "Itunuoluwa", clotheColor: "Multicolored", laptop: "Dell", id: 1},
    {name: "Oluwatomi", clotheColor: "Black", laptop: "HP", id: 2},
    {name: "Abiola", clotheColor: "Blue", laptop: "HP", id: 3},
    {name: "Emmanuel", clotheColor: "Peach", laptop: "HP", id: 4},
]

console.log(premiumTrainees[1].clotheColor);

function myFunction (){
    console.log("Hi!");
    
}
myFunction();
myFunction();

const today = new Date ();

console.log(today.getFullYear());


/* 
    Datatypes and their methods
        1. Number and Number methods
        2. String and String methods
*/

/* 
    Number and Number methods
        1. toFixed()
        2. isNaN()
        3. parseInt() and parseFloat()
        4. Math.random()
        5. Math.floor()
        6. Math.round()
*/

let a = 2;
let b = -2.45;
console.log(typeof(a));
console.log(typeof(b));

// toFixed()
let fixedPi = pi.toFixed(4);
console.log(fixedPi);

// isNaN()
console.log(isNaN(fixedPi));
console.log(isNaN(trainees));

// parseInt() and parseFloat()
let stringNumber = "15.55";
console.log(typeof(stringNumber));

console.log(typeof(parseInt(stringNumber)));
console.log(parseInt(stringNumber));
console.log(parseFloat(stringNumber));

let x = "95";
let y = 5;

let z = parseInt(x) + y;

console.log(z);

const input = document.getElementById("score");
const inputValue = document.getElementById("score").value;

input.addEventListener("blur", function () {
    console.log("Score:", input.value);
    console.log("Data type:", typeof(input.value));
    console.log(input.value + 32); 

});

// Math.random()

let randomNumber = Math.random() * 11;

console.log("Random Number:", randomNumber);

// Math.floor()
let flooredNumber = Math.floor(randomNumber);

console.log("Floored Number:", flooredNumber);

// Math.round()
let roundedNumber = Math.round(randomNumber);
console.log("Rounded Number:", roundedNumber);

const body = document.body;
console.log(body);

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
console.log(`rgb(${red}, ${green}, ${blue})`);


// Template literal
let firstname = "Ayodeji";
let lastname = "Aronimo";

let fullname = `${firstname} ${lastname}`;

console.log(fullname);

/* 
    String and String methods
        1. length
        2. charAt()
        3. substring()
        4. toUpperCase()
        5. toLowerCase()
        6. split()
        
*/

let myString = `This is a string. Abi, you don't agree?`;
console.log(myString[myString.length - 1]);
console.log(myString.charAt(8));
let question = myString.substring(18);
console.log(question);
let affirmation = myString.substring(0, 17)
console.log(affirmation);

let personName = "oLANipEkuN";
console.log(personName);

let correctedName = personName.charAt(0).toUpperCase() + personName.substring(1).toLowerCase();
console.log(correctedName);

let personFullname = "Paul Biya";
let personFirstname = personFullname.split(" ")[0];
let personLastname = personFullname.split(" ")[1];

console.log(personFirstname);
console.log(personLastname);

let message = `Dear, ${personFirstname}. How are you doing today?`

console.log(message);


/* 
    Operators
        1. Arithmetic Operators
            a. Addition Operator ( + )
            b. Subtraction Operator ( - )
            c. Multiplication Operator ( * )
            d. Division Operator ( / )
            e. Exponential Operator ( ** )
            f. Modulus Operator ( % )
            g. Increment Operator ( ++ )
            h. Decrement Operator ( -- )

        2. Assignment Operators
            a. Simple Assignment Operator ( = )
            b. Add and Assign Operator ( += )
            c. Subtract and Assign Operator ( -= )
            d. Multiply and Assign Operator ( *= )
            e. Divide and Assign Operator ( /= )

        3. Comparison Operators
            a. Equality Operator ( == )
            b. Not Equality Operator ( != )
            c. Strictly Equality Operator ( === )
            d. Strictly Not Equality Operator ( !== )
            e. Greater Than Operator ( > )
            f. Less Than Operator ( < )
            g. Greater Than or Equal to Operator ( >= )
            h. Less Than or Equal to Operator ( <= )

        4. Logical Operators
            a. AND Operator ( && )
            b. OR Operator ( || )
            c. NOT Operator ( ! )

        5. Ternary Operator ( ? )


*/

let p = 2;
let q = 3;

// Exponential Operator 
let r = p ** q;
console.log(r);

// Modulus Operator
console.log(q % p);

p = ++p;
console.log(p);

p = --p;
console.log(p);

let firstNumber = 5;

firstNumber += 1;
console.log(firstNumber);

// Add and Assign Operator
let strings = "Ba";
strings += "ll";

console.log(strings);

console.log(q === 3);


console.log(q >= 3);

console.log(q < 4 || q === 2);



console.log(!isNaN(4));

let m = 5;

m > flooredNumber ? console.log(`${m} is greater than ${flooredNumber}`) : console.log(`${m} is less than ${flooredNumber}`);


/* 
    Conditional Statements
        1. If and if/else statement
        2. Switch statement
*/

/* 
    Array and Array methods
        1. length
        2. indexOf()
        3. pop()
        4. push()
        5. shift()
        6. unshift()
        7. includes()
        8. concat()
        9. slice()
*/

const fruits = ["Apple", "Banana", "Cashew", "Dates", "Eggplant", "Fig", "Grapes", "Honeydew"];

// length
console.log(fruits[fruits.length - 1]);

// indexOf
const userSearch = "Cashew";

if (fruits.indexOf(userSearch) === -1) {
  console.log("We cannot find your item!");
} else {
  console.log(`The product is at rack ${fruits.indexOf(userSearch) + 1}`);
}

// pop
fruits.pop();
console.log("Popped Fruits:", fruits);

// push
fruits.push("Horned Melon");

console.log("Pushed Fruits", fruits);

// shift
fruits.shift();

console.log("Shifted Fruits:", fruits);

// unshift
fruits.unshift("Avocado");

console.log("Unshifted Fruits:", fruits);

// includes
console.log(fruits.includes("Honeydew"));

// concat
const firstBatch = ["Ade", "Bobo", "Catherine", "Deola"];
const secondBatch = ["Eniola", "Faith", "Gabriel", "Henry"];

const concatBatch = firstBatch.concat(secondBatch);
console.log(concatBatch);

// slice
console.log(concatBatch.slice(2, 6));




/* 
    Class Exercise
    Problem: Username Validation

    You have the following arrays:

    1. const registeredUsers = ["john_doe", "mary123", "developer01", "sandra"];
    2. const pendingUsers = ["newbie", "guest_user"];
    3. const username = "guest_user"; // you can change this value to test


    Perform these tasks step by step:

    1. Check if the username is available

    2. Create a new variable isAvailable that becomes true if username does not exist in either array, otherwise false.

    (Hint: use concat() and includes())

    3 Add username to pending users if it’s available

If isAvailable is true, create a  new array updatedPending that includes the username added to the end of pendingUsers.

If it’s false, create a variable message that holds the text "Username not available".

(Hint: use concat() again instead of push())

Generate a summary string

Create a string variable summary that combines all users like this:

"Registered: john_doe, mary123, developer01, sandra | Pending: newbie, guest_user"


(Hint: use join() and template literals)
*/

const registeredUsers = ["john_doe", "mary123", "developer01", "sandra"];
const pendingUsers = ["newbie", "guest_user"];
const userName = "Ade124"; // you can change this value to test

// 1. Check if the username is available
const allUsers = registeredUsers.concat(pendingUsers);

const isAvailable = allUsers.includes(userName);

// 2. Add username to pending users if it’s not available
if (isAvailable){
    const message = "Username already exists";
    console.log(message);
    
} else {
    const updatedPending = userName;
    pendingUsers.push(updatedPending);
    console.log("Pending users updated ", pendingUsers);   
}

// 3. Generate a summary string
const summary = `Registered: ${registeredUsers.join(", ")} \nPending: ${pendingUsers.join(", ")}`;

console.log(summary);

console.log(allUsers);
allUsers[1] = "paulina547";
console.log(allUsers);

/* 
    Destructuring Arrays and Nested Arrays
*/

// Destructuring Arrays
const [firstRegistered, secondRegistered, thirdRegistered, fourthRegistered, ...pendedUsers] = allUsers;

console.log(firstRegistered);
console.log(thirdRegistered);

console.log(pendedUsers);

// Nested or Multi-dimensional Arrays
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8];

console.log(nestedArray[2][2][1]);

/* 
    Objects and Object Methods
        1. Creating an Object
        2. Accessing an Object
            a. Dot notation
            b. Bracket notation
        3. Modifying an Object
        4. Object.keys()
        5. Object.values()
        6. Object.entries()
        7. Object.freeze()
        8. Object.seal()

*/

const myState = {
    name: "Ekiti State",
    governor: "Biodun A. Oyebanji",
    capital: "Ado",
    noOfLGA: 16,
    hasAirport: true,  
}

console.log(`My state is ${myState.name}.`);

console.log(
  `Q: Does ${myState["name"]} have an airport?\nA: ${myState["hasAirport"]}`
);

myState.name = "Anambra State";

console.log(myState);

console.log(Object.keys(myState));

console.log(Object.values(myState));

console.log(Object.entries(myState));

myState.name = "Ekiti State";

myState.populace = "3+ million";

console.log(myState);

Object.seal(myState);
myState.hasShoprite = false;
myState.capital = "Ikere";

console.log(myState);

Object.freeze(myState);
myState.governor = "Oluwatimilehin Abiola";
console.log(myState);

/* 
    Loops
        1. for loop
            a. for...in loop
            b. for...of loop
        2. while loop
        3. do...while loop

*/
// for loop
for (let i = 1; i <= 8; i++) {
    console.log("Hello World! " + i);  
}

// while loop
let count = 1;

while (count <= 8) {
    console.log(`Count is ${count}`);
    count++;
}

// do...while loop
let number = 1;

do {
    console.log(`Number is ${number}`);
    // number++;
} while (number === 2);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i].charAt(0)} is for ${fruits[i]}`);
    
}

// for...in loop
const countries =  ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"];

for (let index in countries) {
    console.log(index);
    
}
// for...of loop
for (let country of countries){
    console.log(country);
}

const vehicle = {
    type: "Sedan",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
}

for (let key in vehicle) {
    console.log(`${key}`);
}

for (const [key, value] of Object.entries(vehicle)){
    console.log(`The ${key} is ${value}`);
    
}

const states = [
    {name: "Lagos", capital: "Ikeja", governor: "Babajide Sanwo-Olu"},
    {name: "Oyo", capital: "Ibadan", governor: "Seyi Makinde"},
    {name: "Rivers", capital: "Port Harcourt", governor: "Ezenwo Nyesom Wike"},
    {name: "Kano", capital: "Kano", governor: "Abdullahi Umar Ganduje"},    
]

for (let state of states){
    console.log(`This is ${state.name} State. The capital of ${state.name} is ${state.capital} and its incumbent governor is ${state.governor}.`);
    
}


/*
    Class Exercise
    Problem: A teacher wants to render students in her class in the console. She has an array of student objects, each containing the student's name, scores for mathematics, english, and computer science.
    Perform these tasks step by step:
    1. Show the the details of each student in the console in the following format:
       "Student Name: [name], Math: [math score], English: [english score], Computer Science: [computer science score]"
    2. Calculate and display the agregate and average scores for each student. In this format:
       "Student Name: [name], Aggregate Score: [aggregate score], Average Score: [average score]".
    3. Calculate and display the class' average score.
    4. Display the verdict of each student based on their average score:
       - "Distinction" for average scores 70 and above
       - "Credit" for average scores between 50 and 69
       - "Pass" for average scores between 40 and 49
       - "Fail" for average scores below 40
    5. Create a list of students who scored above the class average.
    6. Create a summary string that lists all students and their aggregate scores in the following format:
       "Students Summary: [name1]: [aggregate score1], [name2]: [aggregate score2], ..."
    7. Identify and display the name of the student with the highest aggregate score.
    8. Identify and display the name of the student with the lowest aggregate score.


*/

/* 
    The continue and break statements in loops
        1. continue statement
        2. break statement
*/

// continue statement
// Loop over 1 - 20 and skip 13
for (let i = 1; i < 21; i++){
    if (i === 13){
        continue;
    } else {console.log(i);
    }
    
}

// break statement
for (let i = 21; i < 41; i++){
    if(i === 31){
        break;
    } else {console.log(i);
    }
    
}

/* 
    Array Iteration Methods
        1. forEach()
        2. map()
        3. filter()
        4. reduce()
        Find other array iteration methods and use them.
        5. find()
        6. some()
        7. every()

*/

const numbers = [26, 22, 13, 71, 12, 44, 47, 1, 23, ];
console.log(numbers);

// sort()
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// forEach()
sortedNumbers.forEach((number, index, array) => {
  console.log(number * 2);
});


// Doing the same thing with for...of
for(let number of numbers){
    console.log(number * 2);

}

// map()
const squaredNumbers = sortedNumbers.map((number) => {
    return number ** 2;
    
});

console.log(squaredNumbers);

// filter()
sortedNumbers.filter((number)=> {
    if(number % 2 == 0) {
        console.log(number);
        
    }
})

// reduce()
const sum = sortedNumbers.reduce((acc, number)=> acc + number, 0);
console.log("Sum of the array:",sum);


// find()
const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
const foundCar = cars.find(function (car) {
    return car === "Toyota";
});

console.log(foundCar);


/*
    Functions
        1. Function Declaration
        2. Function Expression
        3. Arrow Function
        4. IIFE (Immediately Invoked Function Expression)
        5. Anonymous Function
        6. Callback Function
        7. Higher-order Function
*/ 
console.log(add(195, 226));


// Function Declaration
function add (a, b) {
    return a + b;

}

console.log(add(5, 6));

console.log(add(10, 12));

// const user = window.prompt("Enter your name:");

// function greeting (username) {
//     window.alert(`Welcome to class, ${username}`);
// }

// greeting(user);


// Function Expression
const multiply = function (a, b) {
    const result = `The product of ${a} and ${b} is ${a * b}`;
    return result;
}

console.log(multiply(3, 4));

// Arrow Function
const divide = (a, b) => a / b;

console.log(divide(20, 4));

// IIFE (Immediately Invoked Function Expression)
(   // Anonymous Function
    function () {
    console.log("Welcome guys!");
}) ();

// Callback Function
// setTimeout(() => {
//   window.alert("It is already ten seconds!");
// }, 10000);

const averageScore = 15;

const calcAverageScore = () => {
    // const averageScore = 500;
    console.log(averageScore);

}

calcAverageScore()

const phones = ["iPhone", "Samsung", "Nokia", "Itel", "Redmi"]

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const doubled = (numbers) => {
    const doubledNumber = numbers.map((number) => {
        return number * 2;
    })

    const stringedNumber = doubledNumber.join(", ");
    const result = `This is the doubled result of your array: ${stringedNumber}.`;
    
    return result;
};

console.log(doubled(evenNumbers));

console.log(doubled(sortedNumbers));


console.log(doubled([4, 6, 78, 90, 29, 45]));


// Asynchronous JS

// const exec = ["Start", "Middle", "End"];

// exec.forEach((item) => {
//     if (item === "Middle") {
//         setTimeout(() => {
//             console.log(item);   
//         }, 5000)
//     } else {
//         console.log(item);       
//     }
    
// })


/*
    Types of Asynchronous JS
        1. Callbacks
            a. setTimeout()
            b. setInterval()
            c. addEventListener()
*/ 


// setInterval(() => {
//     window.alert("This runs every 4 seconds!")
// }, 4000)

const textInput = document.getElementById("text");
const display = document.getElementById("display");



textInput.addEventListener("input", function () {
    display.innerText = textInput.value;
    console.log(textInput.value)

});

function fetchData (callback) {
    setTimeout(() => {
        console.log("Fetching Data!");
        callback();
    }, 5000)
}

function dataFetched() {
    console.log("Data fetched successfully!");   
}

// fetchData(dataFetched);

/*
    API - Application Programming Interface


*/

const dataFetching = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        const users = data.map((user) => {
            return user.username;
        })

        console.log(users);
       
    } catch(error){
        console.error("Failed to fetch data:", error)
    }
}

dataFetching();




/*
    const Capstone_Projects = [
        {
            name: "Itunuoluwa",
            projectTopic: "Personal Portfolio Website",
            projectDesc: "A portfolio website that describes my skills as a frontend developer and a civil engineer",
            features: [
                "Users can contact me directly from a contact form",
                "Users can toggle light and dark mode",
                "Fade in and fade out effect on sections",

            ]
        },
        {
            name: "Oluwatomi",
            projectTopic: "A flower shop",
            projectDesc: "A sales website where users can purchase flowers and wedding items",
            features: [
                "Users can browse through products and pick what they would be buying",
                "Cart and add/remove to/from cart feature",
                "Calculates total price",
                "Navigation to payment gateway",
                "Responsive and user-friendly design",
            ]
        },
        {
            name: "Abiola",
            projectTopic: "Movie Rating App",
            projectDesc: "Users can view popular movies and view details and ratings",
            features: [
                "Movies displayed in cards",
                "Users can rate movies",
                "Responsive Design",
                "Users can sort and serch movies",
            ]
        },
        {
            name: "Olamide",
            projectTopic: "Weapons Shop",
            projectDesc: "Users can purchase weapons ranging from combat knives to firearms",
            features: [
                "Form that validates and authorise users to make purchases",
                "Users can browse through weapons and pick what they would be buying",
                "Cart and add/remove to/from cart feature",
                "Calculates total price",
                "Responsive and User-friendly Design",
            ]
        },
    ]
        

*/ 

