// First assignment


const students =[
   {Name: "Olamide", Math: 79, English: 63, ComputerScience: 89},
   {Name: "Peter", Math: 56, English: 68, ComputerScience: 54},
    {Name: "Damilola", Math: 65, English: 56, ComputerScience: 79},
    {Name: "Damson", Math: 28, English: 52, ComputerScience: 63},
    {Name: "Olumide", Math: 67, English: 56, ComputerScience: 96}

]

let averageScore = 0;
let accumulator = 0;

for(let info of students){
    console.log(`Student Name: ${info.Name}, Math: ${info.Math}, English: ${info.English}, Computer Science: ${info.ComputerScience}` )
    let aggregateScore = info.Math + info.English + info.ComputerScience
    averageScore = parseInt(aggregateScore/3)
    accumulator += averageScore
    console.log(`Student Name: ${info.Name}, Aggregate Score: ${aggregateScore}, Average Score: ${averageScore}`)
    
    
    if ( averageScore > 70 && averageScore < 101){
    console.log(`Distinction`)
    }else if( averageScore > 50 && averageScore < 69){
        console.log(`Credit`);
    }else if( averageScore < 49 && averageScore > 40){
        console.log(`Pass`);
    }else if(averageScore >40 &&  averageScore < 0){
        console.log(`Fail`);
        
    }





}

let classAverage = accumulator / students.length
console.log(classAverage);

    const aboveclassAverage = students.filter(function(info){
        let aggregateScore =  info.Math + info.English + info.ComputerScience
        averageScore = parseInt(aggregateScore/3)
        return averageScore > classAverage;
    });

    console.log( "Students who scored above class average:",aboveclassAverage);






//2nd assignment

const tipCalculator = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalAmounts: [],

  calculateTip() {
    for (let i = 0; i < this.bills.length; i++) {
      let bill = this.bills[i];
      let tip;
      if (bill < 50) {
        tip = bill * 0.2;
      } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15;
      } else if (bill > 200) {
        tip = bill * 0.1;
      }
      this.tips.push(tip);
      this.finalAmounts.push(bill + tip);
    }
  },
};




console.log("Tips:", tipCalculator.tips);
console.log("Final Amounts:", tipCalculator.finalAmounts);


