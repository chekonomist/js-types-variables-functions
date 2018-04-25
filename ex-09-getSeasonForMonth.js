/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/

function getSeasonForMonth(integer){
var season1arr=  [12, 1, 2]
var season2arr = [3,4,5]
var season3arr= [6, 7, 8]
var season4arr= [9, 10, 11]

for (var i = 0; i < season1arr.length; i++) {
  if ( integer === season1arr[i]){
    return "winter"
  }
}

for (var i = 0; i < season2arr.length; i++) {
  if ( integer === season2arr[i]){
    return "spring"
  }
}

for (var i = 0; i < season3arr.length; i++) {
  if( integer === season3arr[i]){
    return "summer"
  }
}

for (var i = 0; i < season4arr.length; i++) {
  if ( integer === season4arr[i]){
    return "fall"
  }
}

return false

}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
