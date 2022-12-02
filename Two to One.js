//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, 
//containing distinct letters - each taken only once - coming from s1 or s2.
//Examples:

//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"

//a = "abcdefghijklmnopqrstuvwxyz"
//longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Solution:

function longest(s1, s2) {
    let arr2 = s2.split();
    let arr1 = s1.split();
    let arr3 = s1.concat(s2).split("").sort();
    return arr3.filter((el, id) => arr3.indexOf(el) === id).join("");
  }