// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

//usando metodos
function squareDigits(num){
    return Number(String(num).split('').map(elem => elem**2).join(''));
}

console.log(squareDigits,squareDigits(3212));


//concatenando string no numero para converter numero em string
function squareDigits2(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
}

//usando + para converter uma string em numero
function squareDigits3(num){
    return +num.toString().split('').map(i => i*i).join('');
}


//usando toString() e parseInt()
function squareDigits4(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
  }