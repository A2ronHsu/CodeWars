//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

var isSquare = function(n){
    return Math.sqrt(n)% 1  == 0;
}

console.log(Math.sqrt(10));


const isSquare = n => Number.isInteger(Math.sqrt(n));