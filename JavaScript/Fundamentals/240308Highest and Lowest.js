//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let arr = numbers.split(' ').sort((a,b)=> b-a);
    return `${arr[0]} ${arr[arr.length-1]}`;
}

console.log(highAndLow("1 1 0 0 2 3 4 5"));

console.log(highAndLow("42 42"));

