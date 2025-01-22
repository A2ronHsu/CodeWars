//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

function findNb(m) {
    const delta = 1+8*Math.sqrt(m)
    const deltaSqrt = Math.sqrt(delta);
    if(deltaSqrt%1 === 0) return (-1+deltaSqrt)/2; 
    return (-1);
}

console.log(findNb(24723578342962))   

//usando um for na força bruta
function findNb2(m) {
    let n = 1;
    let Arr = [];
    let sum = 0;
    for(;sum <= m; n++ ){
        Arr.push(n**3);
        sum = Arr.reduce((acc,cur)=>acc+cur);
        if (sum === m) return n;
    }
    return (-1);
}

console.log(findNb2(135440716410000))  

//usando while de forma inteligente
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }