//Complete the solution so that it reverses the string passed into it.

function solution1(str){
    return str.split('').reverse().join('');
}


function solution(str){
    let result = '';
    for (let i = str.length - 1; i > -1 ; i--){
        result += str[i]
    }
    return result;
}

