// ALL FUNCTION NAMES ARE CASE SENSITIVE. READ THE DIRECTIONS CAREFULLY.
// BE VERY MINDFUL OF YOUR SYNTAX. A SINGLE ERROR WILL CAUSE ALL TESTS TO FAIL.

// 1. Create a function called giveMeFive. The function
// should take no arguments and return the number 5

function giveMeFive() {
    return 5;
}

/* -------------------------------------------------- */

// 2. Create a function called addTogether that takes two arguments.
// The function should return the sum of those two arguments

function addTogether(x, y) {
    return x + y;
}


//
//
///* -------------------------------------------------- */
//
//// 3. Create a function called isOdd that takes a number as an argument.
//// if the number is odd, the function should return true. If the number is 
//// even the function should return false. Hint: use the % operator. 

function isOdd(num) {
    return (num % 2 == 1);
}

///* -------------------------------------------------- */
//
//// 4. Create a function called isEven that takes a number as an argument.
//// if the number is even, the function should return true. If the number is 
//// odd the function should return false. Hint: use the % operator. 
////
function isEven(num) {
    return (num % 2 == 0);
}

///* -------------------------------------------------- */
//
//// 5. Create a function called max that takes two numbers as arguments.
//// max should return the larger of the two numbers. If the numbers are 
//// equal one of the numbers should be returned.

function max(x, y) {
    return (x < y) ? y : x;
}
//
///* -------------------------------------------------- */
//
//// 6. Create a function called min that takes two numbers as arguments.
//// min should return the smaller of the two numbers. If the numbers are 
//// equal one of the numbers should be returned.

function min(x, y) {
    return (x > y) ? y : x;
}
//
//
//
///* -------------------------------------------------- */
//
//// 7. Create a function called clamp that takes three arguments.
//// The first value should be a number, the second should be a minimum value,
//// and the third should be a maximum value. If the first value is less than the minimum,
//// clamp() should return the minimum value. If the first value is greater than the maximum 
//// clamp() should return the maximum value. If the value is greater than the mimimum, but less
//// than the maxium, clamp() should return the value

function clamp(x, lower, upper) {
    if (x < lower) return lower;
    if (x > upper) return upper;
    return x;
}
//
//
//
//
///* -------------------------------------------------- */
//
//// 8. Create a function called average that takes an array of numbers as its argument.
//// This function should return the average of the numbers in that array. Be sure to account
//// for empty elements in the array. Hint: you can use the typeof operator to see if a value
//// is equal to "number"

function average(a){
    var sum = 0;
    var count = 0;
    
    for (i=0; i<a.length; i++) {
        if (typeof a[i] == 'number'){
            sum += a[i];
            count++;
            }
    }
    return sum / count;
}
////
////
///* -------------------------------------------------- */
//
//// 9. Create a function called disagree that takes a boolean as an argument. 
//// This function should return the opposite value(true if the argument is false, 
//// false if the argument is true). Hint: use the ! operator.

    function disagree(bool) {
    return (!bool);
}
//
//
//
///* -------------------------------------------------- */
//
//// BONUS. Create a function called fizzBuzz that takes a number as an argument. 
//// If the number is divisible by 3, return the string "fizz".
//// If the number is divisible by 5, return the string "buzz".
//// If the number is divisible by both 3 AND 5, return the string "fizzbuzz". 
//// Hint: use the % operator and be careful of the order of your if statements

function fizzBuzz (num) {
    if (num % 15 == 0){
        return ('fizzbuzz');
    }else if (num % 3 == 0){
        return('fizz');
    }else if (num % 5 ==0){
        return('buzz');
    }else{};
};

