/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

// function isVowel(charater){
//   var vowelList = [ "a", "e", "i", "o" ,"u", "A", "E", "I", "O", "U", "y", "Y" ]
//   var findVowel = vowelList.find(function(character) {
//     return character
//   }


function isVowel(letter){
 var vowelArr = [ "a","e","i","o","u","y" ]

for (var i = 0; i < vowelArr.length; i++) {
  if( letter.toLowerCase() === vowelArr[i] ){
    return true
  }
}
    return false
}

 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
