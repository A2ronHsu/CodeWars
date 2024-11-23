//https://www.codewars.com/kata/56b85fc4f18876abf0000877/train/javascript

let cache = {};

var f = function(k, n){
   if ( n == 0) return 1;
   let acc = 0;
   for (let i=0; i <= n; i++){
      
      let floor = Math.floor(i/k);
      if( cache[floor] == undefined) cache[floor] = f( k, floor);
      acc += cache[floor] 
   }

   return acc;
}

console.log(f(7, 500));