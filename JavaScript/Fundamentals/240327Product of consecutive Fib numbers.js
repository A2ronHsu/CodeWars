//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript


function nFibonacci(n, previousFib, currentFib){
    let arr = [0,1];
    if (n == 1) return [previousFib, currentFib]=[0,0];
    if (n == 2) return [previousFib, currentFib]=[0,1];
    let temp = 0;
    for( let i = 2; i < n; i++ ){
        temp = arr[0]+arr[1];
        arr.shift();
        arr.push(temp);
        console.log(arr);
    }
    currentFib = arr[1];
    previousFib = arr[0];
    return arr
}

console.log(nFibonacci(14))

function productFib(prod){
    let [currentFib, previousFib] = [0,0];
    for(let i = 1; currentFib*previousFib < prod; i++){
        nFibonacci(i, previousFib, currentFib);
        if (currentFib*previousFib == prod) return [previousFib, currentFib, true];
    }
    
}
