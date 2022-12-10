//When provided with a number between 0-9, return it in words.

//Input :: 1

//Output :: "One".

//If your language supports it, try using a switch statement.

Solution:

function switchItUp(number){
    let string = "";
    switch(number) {
        case 0 : string = "Zero";
        break;
        case 1 : string = "One";
        break;
        case 2 : string = "Two";
        break;
        case 3 : string = "Three";
        break;
        case 4 : string = "Four";
        break;
        case 5 : string = "Five";
        break;
        case 6 : string = "Six" ;
        break;
        case 7 : string = "Seven";
        break;
        case 8 : string = "Eight";
        break;
        case 9 : string = "Nine";
        break
    }
    return string
  }
