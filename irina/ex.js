// Closures
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// 1. Addition
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
function add(x) { //here no need to add a paramenter y, because when console.log will consider the first and second functions.
    return function(y) {
      return x + y;
    };
  }
  console.log(add(3)(4)); //7
//OR
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  let add1 = makeAdder(3);
  let add2 = makeAdder(10);
  //console.log(add1(4));  // 7
 // console.log(add2(2)); // 12
  /* function makeAdder(x), takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.
  add1 and add2 are both closures. They share the same function body definition, but store different lexical environments. In add1's lexical environment, x is 3, while in the lexical environment for add2, x is 10. */
//OR
let e = 0;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(3);
var s1 = s(4);
var s2 = s1(0);
var s3 = s2(0);
//console.log(s3) //7
/*
there's a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to all outer function scopes. */

// 2. Multiply
// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
/*
Base: function multiplier(x) { 
    return function(y) {
      return x * y;
    };
  }
  console.log(multiplier(3)(4));
*/

//to store in another variable:
let multiplier = function(x) {
    return function(y) {
        return x * y;
    }
};
let z = multiplier(3);
console.log(z(4)); //12

// OR WITH ARROW FUNCTION 

function multiplier2(x){
    return y => x * y
}
let z2 = multiplier2(3);
console.log(z2(4)) //12


// 3. Calculate Money Saved till Pension Day!
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

//CLASS + CONSTRUCTOR + CLOSURES

class retirement {
    constructor(name, age,ret_age, wage, per_saved) {
        this.name = name;
        this.age = age;
        this.ret_age = ret_age;
        this.wage = wage;
        this.per_saved = per_saved;    
}
info() {
    console.log(`My name is ${this.name} and I am ${this.age} years old. My montly wage is ${this.wage} EUR and I am able to save ${this.per_saved}% of it.`);
}
result() {
    if (this.age >= this.ret_age) {
    console.log("You’re already retired!");

} else {
    let retire      = this.ret_age - this.age;
    let percentage       = this.per_saved * 0.01;
    let montly_income = this.wage * percentage;

    let result = (this.ret_age - this.age) * (this.wage * percentage * 12);
    console.log
    (`Years to retire: ${retire}
Montly income: ${montly_income} EUR
Saved until retires?  ${result} EUR
    `);
}
} 
}
let personx = new retirement('lady', 40, 65, 2000, 5);
personx.info();
personx.result();
/*
My name is lady and I am 40 years old. My montly wage is 2000 EUR and I am able to save 5% of it.
Years to retire: 25
Montly income: 100 EUR
Saved until retires?  30000 EUR
*/
let person1 = new retirement('Agata', 25, 65, 1000, 10);
person1.info();
person1.result()
let person2 = new retirement('John',70, 65, 500, 0.5 );
person2.info();
person2.result()



