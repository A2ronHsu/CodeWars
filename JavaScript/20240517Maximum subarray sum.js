//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
var maxSequence = function(arr=[]){
    let idx = []
    for ( let i = 0; i < arr.length;i++){
        if(arr[i]>0) idx.push(i);
    }
    if (idx.length === 0) return 0;
    if (idx.length === arr.length) return arr.reduce((a,b)=> a+b);
    let maxSum = 0;
    for (let i = 0; i < idx.length;i++){
        for(let j = i; j < idx.length;j++){
            let sum = arr.slice(idx[i],idx[j]+1).reduce((a,b)=>a+b,0);
            if (sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum
}
let array = [-35,-14,7,-25];
console.log(maxSequence(array));


//esse é melhor
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
}