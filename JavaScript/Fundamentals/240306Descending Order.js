//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
    return +String(n).split('').sort((a,b)=>(b-a)).join('');
}

console.log(descendingOrder(42145))

function number2array(n){
    let arr = [];
    let i = n;
    if( n === 0 ) return 0;
    while (i !== 0){
        arr.push(i%10)
        i = parseInt(i/10);
    }
    return arr;
}
console.log("number2array", number2array(123));

function maxNumber(arr, n){
    let max = arr[n-1];
    for (n ; n< arr.length ; n++){
        if( max < arr[n])  max = arr[n];

    }
    return max;
}

console.log("maxNumber", maxNumber([5,4,3,2,-1],1))



function descendingSort(arr){
    for (let i = 1; i < arr.length; i++){
        let max = maxNumber(arr, i);
        let maxIndex = arr.indexOf(max);
        [arr[i-1], arr[maxIndex] ] = [arr[maxIndex], arr[i-1]]

    }
    return arr;
}
console.log("descendingSort", descendingSort([3,5,1,6,7,4]))

function descendingOrder2(n){
    let arr = number2array(n);
    descendingSort(arr);
    return arr;    
}



console.log(descendingOrder2(125346));


