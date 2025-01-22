//https://www.codewars.com/kata/56b85fc4f18876abf0000877/train/javascript



var f = function(k, n){
   let acc = [1];
   for ( let i=1; i <= n; i++){
      let floor = Math.floor(i/k);
      acc[i] = acc[i-1] + acc[floor]; 
   }

   return acc[n];
}

// const f = (k,n)=>{
//    let acc = 1;

// }


console.log(f(2, 7));