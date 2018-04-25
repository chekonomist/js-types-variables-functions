/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
function justOneString(value1, value2){
  if ( typeof value1 === "string" && typeof value2 === "string" ){
    return false
  }

if ( typeof value1 === "string" || typeof value2 === "string" ){
    return true
  }

if ( typeof value1 !== "string" && typeof value2 !== "string"){
  return false
}

}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
