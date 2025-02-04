function add(n){
   var fn = function(x) {
     return add(n + x);
   };
   
   fn.valueOf = function() {
     return n;
   };

   fn.toString = function(){
      return n
   }
   
   return fn;
 }

 const sum = add(1)(2)(3);
 console.log(sum);