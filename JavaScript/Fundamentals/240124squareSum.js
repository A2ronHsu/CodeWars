//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    return numbers.reduce((acc, cur)=>acc += cur**2, 0); //pensei que a função acc funcionasse como uma variavel interna, quando na verdade é o proprio retorno de reduce
}

console.log(squareSum([1,2,2]));

function squareSum2(numbers) {
    return numbers.reduce((s,a)=>s+a*a,0); //portanto eu podia ter escrito assim
  }

console.log(squareSum2([1,2,2]));