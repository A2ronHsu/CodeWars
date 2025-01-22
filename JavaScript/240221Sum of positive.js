//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {

    return arr.reduce((acc,cur)=>(
        (cur > 0)? acc += cur : acc += 0 )?? 0);  
}

console.log(positiveSum([]));