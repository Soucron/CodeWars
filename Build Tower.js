
//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

//For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

//And a tower with 6 floors looks like this:

Solution:

function towerBuilder(nFloors) {
    let array  = [];
    for (let i = 1;i <= nFloors;i++){
      let space = (" ").repeat(nFloors - i);
      let star = ("*").repeat((2*i)-1);
      array.push (space+star+space);                        
    }
  return array
  }