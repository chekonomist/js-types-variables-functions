/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/

function getMinimum(num1, num2, num3, num4) {
  var minNumber = Math.min(num1, num2, num3, num4)
  return minNumber
}

var example1 = getMinimum (-1,-2,-3,-4)
console.log(example1)
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*



console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
