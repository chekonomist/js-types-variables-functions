/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/

function makeGreeting(name){
  return "Hello " + name
}
 var example1 = makeGreeting("Checo")
 console.log(example1)

 // There was a mistake, I think, on the third example. It was testing funcOutput !=== "Hello Nico"

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeGreeting("Atushi")
console.assert( funcOutput1  === "Hello Atushi" );

var funcOutput2 = makeGreeting("Mira")
console.assert( funcOutput2 === "Hello Mira");

var funcOutput3 = makeGreeting("Nico")
console.assert(funcOutput3 === "Hello Nico");
