//Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//usando sort, spreas, set
function findOdd(arr) {
    setArr = [... new Set(arr)];
    arr.sort((a,b)=>a-b);
    oddNumber = setArr.reduce((acc,cur,i)=> {
        let numOfOdds = 1+arr.lastIndexOf(cur)-arr.indexOf(cur); 
        return numOfOdds % 2 === 1? acc = cur : acc;
    },0)
    return oddNumber;
}

let arr = [5,4,3,2,1,5,4,3,2,10,10];
// console.log(arr.sort((a,b)=> a- b))
// console.log(findOdd(arr));

//usando um objeto de arrays
function findOdd2(arr){
    let obj = {};
    for (i=0 ; i< arr.length; i++){
        key = arr[i];
        if( obj[key] == undefined) {
            obj[key] = [Math.abs(key)];
        }else{
            obj[key].push(Math.abs(key)) ;
        }
    }
    console.log(obj);

    for (let key of arr){
        let length = obj[key].length;
        if(length % 2 === 1) return key;
    }
}

console.log(findOdd2(arr));

//usando o operador XOR (exclusive or)
const findOdd3 = (xs) => xs.reduce((a, b) => a ^ b);
//A ideia por trás desse código é que o operador XOR aplicado a um número duas vezes resulta no próprio número original (porque a ^ b ^ b = a). Então, se houver um número ímpar de ocorrências de um determinado número no array, ele permanecerá no resultado final. Se houver um número par de ocorrências, ele será "cancelado" pelo operador XOR e não afetará o resultado final.
