//Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.

function findAverage(array) {
    
    if ( array.length > 0){
        return array.reduce((acc, cur)=> acc+cur)/array.length;}
    else {return 0}
  }

const arr = [1,2,3,4];

console.log(findAverage(arr));;
