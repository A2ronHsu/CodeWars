//In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.\
//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript


function permutate(arr, index = 0, result) {
    if (index === arr.length - 1) {
        result.push(arr.slice().join(''));
    } else {
        for (let i = index; i < arr.length; i++) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            permutate(arr, index + 1, result);
            [arr[index], arr[i]] = [arr[i], arr[index]]; // backtrack
        }
    }
    return result;
}

function permutations(string) {
    let arr= string.split('');
    let result = [];
	permutate(arr,0, result);
    
    
    return result;
}

let strArr = 'a';
let result = [];

console.log( permutations(strArr, 0, result)); 