//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

//usando um while
function persistence(num) {
    strArr = String(num).split('');
    result=0;
    while ( strArr.length > 1){
        strArr = String(strArr.reduce((acc,cur)=> acc*cur)).split('');
        result++;
    }

    return result;
}

//console.log(persistence(999))


//usando recursão
function recursion(strArr){
    if (strArr.length > 1){
        return 1 + recursion(String(strArr.reduce((acc,cur)=> acc*cur)).split(''));
    }else{
        return 0;
    }
}
function persistence2(num){
    const strArr = String(num).split('');
    return recursion(strArr);
}

console.log( persistence2(25));

//essa recursão é mais elegante
const persistence3 = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }