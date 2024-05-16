//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
    let result = []
    for (let i = a; i<=b; i++){
        if(isDigPow(i)) result.push(i);
    }
    return result;
}

const isDigPow = (number) =>{
    let digit = number;
    let array = [];
    while (digit){
        array.push(digit%10);
        digit = Math.floor(digit/10);
    }
    array.reverse();
    let sum = array.reduce((acc,cur, i)=> {return acc += cur**(i+1)}, 0 )

    return sum === number;
};


console.log(sumDigPow(1,150));