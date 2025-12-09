let myCompany = "AB Group"
console.log(myCompany);
console.log(typeof(myCompany));

const myEmployees = [
    {name: "Abimbola", skillSet: "Software Developer", position: "Director"},
    {name: "Abiola", skillSet: "Software Developer", position: "Owner"},
    {name: "Victoria", skillSet: "Data Analysis", position: "Tutor"},
    {name: "Femi", skillSet: "Graphics Designer", position: "Tutor"}
];
console.log(myEmployees);
console.log(typeof(myEmployees));

// let userScore = window.prompt("Enter your score")
// let passScore = 49
// let limit = 100

// userScore >= passScore && userScore <= limit ? window.alert("PASS") : window.alert("fail")


    // let firstQuestion = window.prompt("5 + 4")
    // let secondQuestion = window.prompt("4 + 7")
    // let thirdQuestion = window.prompt("1 + 2")

    // let quizScore = 0;

    // if (firstQuestion === "9") {
    //     quizScore += 1;
    // }

    // if (secondQuestion === "11") {
    //     quizScore += 1;
    // }

    // if (thirdQuestion === "3") {
    //     quizScore += 1;
    // }

    // window.alert(`You scored ${quizScore} out of 3!`);


let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Today is the first working day of the week!");
        
        break;

    case "Tuesday":
        console.log("You should be used to going to work now, cause today is Tuesday already.");
        
        break;

    case "Wednesday":
        console.log("Wednesday is here, hurray!!!");
        
        break;

    case "Thursday":
        console.log("It's Thursday!");
        
        break;
    default:
        break;
}


// let birthMonth = window.prompt("what's your birth month")

// switch (birthMonth) {
//     case "January":
//         window.alert("you are a fool");

//         break;
//     case "February":
//         alert("You are the best!!!");

//         break;
//     case "March":
//         alert(`a scorpio idiot just cus you were born in ${birthMonth}`);

//         break;
//     case "April":
//         alert("make we just manage you");

//         break;
//     default:
//         alert("you no get better month. Go sit down somewhere");

//         break;
// }

const registeredUsers = ["john_doe", "mary123", "developer01", "sandra"];
const pendingUsers = ["newbie", "guest_user"]
const username = "guest_user"
const isAvailable = "ade124"
const myConcat = registeredUsers.concat(pendingUsers)



console.log(myConcat.includes(isAvailable));

if (myConcat.includes(isAvailable)) {
    console.log("username is available");
} else {
    console.log("username is not available");
}


const summary = `Registered: ${registeredUsers} | Pending: ${pendingUsers}`;
console.log(summary);


const student = {
    name: "Jane Doe",
    age: 20,
    track: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript"],
    isCertified: false
}

console.log("student's name: ", student.name);
console.log("student's track: ", student.track);

student.grade = "A"
console.log(student);

student.isCertified = true
console.log(student);

student.skills.push("React")
console.log(student);

const keys = Object.keys(student)
console.log(keys);

const values = Object.values(student)
console.log(values);

console.log(keys, values);

const myEntryArray = Object.entries(student)
console.log(myEntryArray);

myEntryArray [0] = "name: Jane Doe"
myEntryArray [1] = "age: 20"
myEntryArray [2] = "track: Frontend Development"
myEntryArray [3] = "skills: HTML, CSS, JavaScript, React"
myEntryArray [4] = "isCertified: true"
myEntryArray [5] = "grade: A"
console.log(myEntryArray);

Object.freeze(student)
student.country = "Nigeria"
console.log(student);



const mentor = {
    name: "Mr. Akin",
    experience: 5,
};

console.log(mentor);


Object.seal(mentor)

mentor.experience = 6
console.log(mentor);

mentor.instructor = "Abiola"
console.log(mentor);


// array of Object. name score for math eng and Comp. 
// console


/*
    forEach()
    map()
    filter(). it checks the array for a condition (like check if theres an even number in an array). if there is an even number, it returns the even number
    reduce(). it is used like add and assign. theres an accumulator which will collect the values of the array and add one by one
    some(). it checks if one the items in the array meets a condition and it returns true or false
    every(). it checks if all of the items in the array meets the condition ad it returns a boolean. true if all meets and false if one doesnt
    find(). it checks for a particular item in the array and if its true (that is, the item is in the array), it returns the item and if it doesnt find, it returns undefined
    findIndex(). its just like find but it returns the index value of what we are looking for
*/

    // filter()
    const integer = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const evenNumber = integer.filter(function (integer) {
        return integer % 2 === 0
    })
    console.log(evenNumber);

    // reduce
    const reduced = integer.reduce(function (acc, integer){
        return acc + integer
    }, 0)
    console.log(reduced);
    
    
    // find

    const findNumbers = [
        {phone: `itel`},
        {phone: `iphone`},
        {phone: `samsung`}
    ]

    const find = findNumbers.find(function (findNumbers){
        return findNumbers.phone === `xiaomi`
    })
    console.log(find);

    // some

  

    //  learn about higher-order function

/*
Home Exercise 
 
Problem: A teacher wants to render students in her 
class in the console. She has an array of student 
objects, each containing the student's name, scores 
for mathematics, english, and computer science. 
 
Perform these tasks step by step: 
1. Show the the details of each student in the 
console in the following format: 
"Student Name: [name], Math: [math score], English: 
[english score], Computer Science: [computer science 
score]" 
 
2. Calculate and display the agregate and average 
scores for each student. In this format: 
"Student Name: [name], Aggregate Score: [aggregate 
score], Average Score: [average score]". 
 
3. Calculate and display the class' average score. 
 
4. Display the verdict of each student based on their 
average score: 
      - "Distinction" for average scores 70 and above 
      - "Credit" for average scores between 50 and 69 
      - "Pass" for average scores between 40 and 49 
      - "Fail" for average scores below 40 
 
5. Create a list of students who scored above the 
class average. 
 
6. Create a summary string that lists all students 
and their aggregate scores in the following format: 
"Students Summary: [name1]: [aggregate score1], 
[name2]: [aggregate score2], ..." 
7. Identify and display the name of the student with 
the highest aggregate score. 
8. Identify and display the name of the student with 
the lowest aggregate
*/


// Class Exercise
const studentsInfo = [
    {Name: "Bimbola", Math: 28, English: 19, ComputerScience: 30},
    {Name: "Dada", Math: 78, English: 59, ComputerScience: 90},
    {Name: "David", Math: 58, English: 9, ComputerScience: 30},
    {Name: "Stanley", Math: 48, English: 89, ComputerScience: 70},
    {Name: "Rashford", Math: 41, English: 69, ComputerScience: 90},
    {Name: "Kingsley", Math: 21, English: 87, ComputerScience: 50},
    {Name: "Justice", Math: 35, English: 79, ComputerScience: 68},
    {Name: "Wonder", Math: 67, English: 81, ComputerScience: 59},
    {Name: "Power", Math: 23, English: 99, ComputerScience: 64},
    {Name: "Rejoice", Math: 32, English: 44, ComputerScience: 65}
]

let averageScore = 0;
let scoreAccumulator = 0;


for (let info of studentsInfo){



    // 1.
    console.log(`Student Name: ${info.Name}, Math: ${info.Math}, English: ${info.English}, Computer Science: ${info.ComputerScience}`);

    // 2.
    let aggregateScore = info.Math + info.English + info.ComputerScience;
    averageScore = parseInt(aggregateScore/3);
    console.log(`Student Name: ${info.Name}, Aggregate Score: ${aggregateScore}, Average Score: ${averageScore} `);

    // 4.
    if (averageScore >= 70 && averageScore < 101) {
        console.log(`Distinction`) ;
        
    } else if (averageScore >= 50 && averageScore <  70 ) {
        console.log(`Credit`);

    } else if (averageScore >= 40 && averageScore <  50 ) {
        console.log(`Pass`);
        
    } else if (averageScore <  40 )
        console.log(`Fail`);
    // 3.
    scoreAccumulator += averageScore;


            
}


// 3.
const classAverage = scoreAccumulator / studentsInfo.length;

console.log("Class Average:", classAverage);

    // function aboveClassAverage() {
    //     if (averageScore >= classAverage) {
    //         console.log (`${info.Name} scored above class average`);
    //         return averageScore >= classAverage;
    //     }
    // }
    // aboveClassAverage();

    // 5.
    const aboveClassAverage = studentsInfo.filter(function (info) {
        let aggregateScore = info.Math + info.English + info.ComputerScience
        averageScore = parseInt(aggregateScore/3)
        return averageScore > classAverage;
    });
    
    const listOfAbove = aboveClassAverage.map((item) => {
        return item.Name;
    });
    console.log("Students who scored above class average:", listOfAbove.join(", "));

    // 6.
    const summaryString = studentsInfo.map(function (info) {
        let aggregateScore = info.Math + info.English + info.ComputerScience
        return `${info.Name}: ${aggregateScore}`;
    }).join(", ");
    console.log(summaryString);

    // 7.
    const highestAggregateStudent = studentsInfo.forEach(function  (info) {
        let aggregateScore = info.Math + info.English + info.ComputerScience
        return Math.max(aggregateScore);
    })
    console.log(highestAggregateStudent);

    // 8.
    const lowestAggregateStudent = studentsInfo.forEach(function  (info) {
        let aggregateScore = info.Math + info.English + info.ComputerScience
        return Math.min(aggregateScore);
    })
    console.log(lowestAggregateStudent);

    

    /*
     john and his family went to 5 different restaurants, the bills were $124, $48, $268, $180 and $42. 
     john likes to tip 20% when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
     implement a tip calculator using objects and loops:
     1. create an object with an array for the bill values 
     2. add a method to calculate the tip
     3. this method should include a loop to iterate over all the paid bills and do the tip calculations 
     4. as an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). hint: start with two empty arrays [] as properties and then fill them up in the loop
     */

    //  solution
//    1
    const johnsFamily = [
        {bills: 124, tips: []},
        {bills: 48, tips: []},
        {bills: 268, tips: []},
        {bills: 180, tips: []},
        {bills: 42, tips: []}
    ]
// 2&3.

    for (let values of johnsFamily) {
        if (values.bills < 50) {
            let tip = values.bills * 20 / 100
            values.tips.push(tip)
        } else if (values.bills >= 50 && values.bills < 200) {
            let tip = values.bills * 15 / 100
            values.tips.push(tip)
        }   else if (values.bills >= 200) {
            let tip = values.bills * 10 / 100
            values.tips.push(tip)
        }
    }
    console.log(johnsFamily);

    //4.
    // const allTips = johnsFamily.map(function (values) {
    //     return values.tips;
    // });
    // console.log(allTips);

    // // b.
    // const allBills = johnsFamily.reduce(function (acc, values) {
    //    let calculatedBills = acc + values.bills 
    //    let calculatedTips = acc + values.tips
    //     return parseInt(calculatedTips + calculatedBills);
    // }, 0);
    // console.log(allBills);


    const allTips = [];
    const finalPaidAmounts = [];
    for (let values of johnsFamily) {
        allTips.push(...values.tips);
        finalPaidAmounts.push(values.bills + values.tips);
    }
    console.log("all tips:", allTips)
















    







