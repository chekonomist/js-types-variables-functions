/**
 * simpleSum()
 * ------------------------------------------------------
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 *
 **/

function simpleSum(num1,num2){
  return num1 + num2
  //YOUR CODE HERE
   //  -- NOTE you will need to write the functions for
   //     remaining problems in the problem set
}

var example1 = simpleSum(1,-1);
console.log( example1 );

console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
