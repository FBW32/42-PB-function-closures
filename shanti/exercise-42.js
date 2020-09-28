// Closures

// closure consists of atleast one variable and one nested scope

/* 1. Addition
    Write a function add that uses a closure that performs addition on arguments in two separate function calls.
    add(3)(4);
    // returns 7
*/
let add = function(x) {
    return function(y) { 
        return x + y ; 
    };
}
console.log(add(3)(4)); // 7

/* 2. Multiply
    Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
*/
let multiplier = function(numa) {
    let multiply = function(numb) {
        return numa * numb;
    };
    return multiply;
};
let a = multiplier(3);
console.log(a(5)); // 15

// OR

function multiplier1(num) {        

    return x => x * num;          
}
const times = multiplier1(2);      
console.log(times(5)); // 10
console.log(times(6)); // 12

/* 3. Calculate Money Saved till Pension Day!
    Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

    The current age of the person // e.g. 40
    The retirement age of the person // e.g. 60
    The monthly wage the person earns // e.g. 1000
    The percentage (as integer) that the person saves each month // e.g. 10%
    If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

    Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
    Output: $30000
*/
function moneySaved (age, retireAge, monthlyWage, percSaves) {

    if (age >= retireAge) {
  
        console.log("You’re already retired!");
  
    } else {
        
        let yearsToRetire      = retireAge - age;
        let newPercSaves       = percSaves * 0.01;
        let savedMoneyPerMonth = monthlyWage * newPercSaves;
        let savedMoneyPerYear  = monthlyWage * newPercSaves * 12;
  
        let result = (retireAge - age) * (monthlyWage * newPercSaves * 12);
  
        console.log
        (`How many years remain until the person retirement?         ${yearsToRetire}
          Saved money per month:                          ${savedMoneyPerMonth} EUR
          Saved money per year:                           ${savedMoneyPerYear} EUR
          Saved until retirement:                            ${result} EUR
        `);
    }
  
  }moneySaved(40, 65, 2000, 5);
/*
    How many years remain until the person retirement?         25
            Saved money per month:                          100 EUR
            Saved money per year:                           1200 EUR
            Saved until retirement:                            30000 EUR
*/
moneySaved(70, 65, 2000, 5); // You’re already retired!

