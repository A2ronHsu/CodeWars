function digPow(N, p){
    let n = N;
    let numberArr = [];
    while(n != 0){
        numberArr.push(n%10);
        n = parseInt(n/10);
    }
    numberArr.reverse();

    for(let i = 0 ; i<numberArr.length; i++){
        numberArr[i] = numberArr[i]**p;
        p++;
    }

    let sum = numberArr.reduce((acc,cur)=> acc+cur)/N;
    if(sum%1 === 0) return sum;
    return -1;
    
}
console.log(digPow(92,1));

//usando split, map e reduce
function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}//z.