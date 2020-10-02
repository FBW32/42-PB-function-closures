/* 1. Addition
Write a function add that uses a closure that performs addition on arguments in two separate function calls.
add(3)(4); */

let add = function (x) {
    return  function add (y) {return x + y}
 }
 
 console.log(add(3)(4));     // 7
 console.log(add(8)(20));    // 28

 /* 2. 
 Multiply
Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called. */

let multiplier = function (x) {
    return  function multiplier (y) {return x * y}
 }
 
 console.log(multiplier(3)(4));     // 12
 console.log(multiplier(8)(20));    // 160

 /* 3. 
 Calculate Money Saved till Pension Day!
 */
let moneySaved = function(currentAge, retirementAge, wage, percentage) {
    if (currentAge >= retirementAge) {
        return "You're already retired!"
    } else if (currentAge < retirementAge) {
        let years = retirementAge - currentAge;
        let moneyToRetirement = years * wage * 0.05 * 12;
        return moneyToRetirement;
    }
}
console.log(moneySaved(40, 65, 2000, 0.05)) // 30000
