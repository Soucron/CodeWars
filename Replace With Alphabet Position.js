//Welcome.//

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.//

//If anything in the text isn't a letter, ignore it and don't return it.//

//"a" = 1, "b" = 2, etc.//

//Example//
//alphabetPosition("The sunset sets at twelve o' clock.")//


let alphabetPosition = (text) => {
    let str = Array.from(text.toLowerCase().replace(/[^a-z]/g,''));
    let arr = [];
    for (let i = 0; i < str.length; i++) {
       arr.push(str[i].charCodeAt() - 96);
    }
      return arr.join(' ');
  }


