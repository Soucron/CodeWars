//Your job is to write a function which increments a string, to create a new string.//

//If the string already ends with a number, the number should be incremented by 1.//
//If the string does not end with a number. the number 1 should be appended to the new string.//

function incrementString (strng) {
  if(isNaN(parseInt(strng[strng.length - 1]))) return strng + '1';
  return strng.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
     up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
} 