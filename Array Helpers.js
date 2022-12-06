//This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods:
 //square(), cube(), average(), sum(), even() and odd().

//Explanation:

    //square() must return a copy of the array, containing all values squared
    //cube() must return a copy of the array, containing all values cubed
    //average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    //sum() must return the sum of all array values
    //even() must return an array of all even numbers
    //odd() must return an array of all odd numbers

//Note: the original array must not be changed in any case!


Solution:

Array.prototype.square = function(numbers) {
    return this.map(a=>Math.pow(a,2))
  }
  Array.prototype.cube = function(numbers)  {
    return this.map(a=>Math.pow(a,3))
  }
  Array.prototype.average = function(numbers) {
    return this.length == 0? NaN : this.sum()/this.length;
  }
  Array.prototype.sum = function(numbers)  {
    return this.reduce((a,b)=> a+b);
  }
  Array.prototype.even = function(numbers)  {
    return this.filter (a => a % 2 == 0);
  }
  Array.prototype.odd = function(numbers)  {
    return this.filter (a => a%2 ==1)
  }