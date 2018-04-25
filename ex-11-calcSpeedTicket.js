/**
 * calcSpeedTicket()
 * ------------------------------------------------------
 * Write a function that calculates a speeding ticket:
 *
 * The function should take 3 arguments:
 *    (1) the speed limit
 *    (2) the user's reported speed
 *    (3) a boolean value for whether the user was in
 *        a protected area (like a school-zone or work-zone)
 *
 * fine schedule:
 *   less than speed limit             : $0
 *   speeding ticket (< 20mph)         : $150
 *   speeding ticket (>= 20mph)        : $250
 *
 * If the user is in a protected area, the fine doubles.
 *
 * Examples:
 *  calcSpeedTicket(40, 30, false)
 *    => 0
 *
 *  calcSpeedTicket(20, 30, false)
 *    => 150
 *
 *  calcSpeedTicket(20, 31, true)
 *    => 300
 *
 *  calcSpeedTicket(50, 100, true)
 *    => 500
 *
 **/

function calcSpeedTicket(speedLim, repSpeed, inProtArea){
  var doubleFine = 1

  if (inProtArea=true) {
    doubleFine = 2
  }

  if (speedLim >= repSpeed) {
    return 0 * doubleFine
  }

  if (speedLim + 20 < repSpeed) {
    return 250 * doubleFine
  }

  return 150 * doubleFine
}

var example1 = calcSpeedTicket(25,40,false)
console.log(example1)
var example2 = calcSpeedTicket(65,72,true)
console.log(example2)
var example3 = calcSpeedTicket(75,97,false)
console.log(example3)
var example4 = calcSpeedTicket(55,83,true)
console.log(example4)
var example5 = calcSpeedTicket(30,27,true)
console.log(example5)
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
// double fine should apply, isn't it?
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )

console.assert( calcSpeedTicket(30, 27, true) === 0  )
