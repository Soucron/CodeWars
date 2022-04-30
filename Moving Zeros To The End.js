Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  let count = 0;
  for (let i=0;i<arr.length;i++){
    if (arr[i] === 0) {
      count += 1;
    }
  }
  function notZero(value) {
    return value !==0
  }
  let newArr = arr.filter(notZero);
  
    while (count > 0) {
    newArr.push(0)  
      count--
    }
  return newArr;
}