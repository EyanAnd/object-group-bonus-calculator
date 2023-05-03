// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

//   * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
// - The `log` should be in the loop, not the function.
// Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. 
// _Note these properties are different than the ones you start with!_

function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  
    let bonusPercentage = 0;
    if (employee.reviewRating <= 2) {
      bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
      bonusPercentage = 0.04;
    } else if (employee.reviewRating === 4) {
      bonusPercentage = 0.06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = 0.1;
    }
    if (employee.employeeNumber.length === 4) {
      bonusPercentage += 0.05;
    }
    if (Number(employee.annualSalary) > 65000) {
      bonusPercentage -= 0.01;
    }
    if (bonusPercentage > 0.13) {
      bonusPercentage = 0.13;
    } else if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }
  console.log(bonusPercentage);
  let totalBonus = bonusPercentage * Number(employee.annualSalary);
  let totalCompensation = totalBonus + Number(employee.annualSalary); //original salary + 
  let newEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
  

  return newEmployee;
}

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  console.log(calculateIndividualEmployeeBonus(employee));
}


//   Those who have a rating of a 2 or below should not receive a bonus.
    // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
    // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
    // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
    // If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
    // However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
    // No bonus can be above 13% or below 0% total.
    // return new object with bonus results