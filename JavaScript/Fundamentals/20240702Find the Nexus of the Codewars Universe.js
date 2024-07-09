//https://www.codewars.com/kata/5453dce502949307cf000bff/train/javascript
function nexus(users) {
   let entries  = Object.entries(users);
   let cache = Math.abs(entries[0][0]-entries[0][1]);
   let result=1;
   for( let i in entries){
      let temp = (Math.abs(entries[i][0]-entries[i][1]));
      console.log(i,cache, temp, result)
      if (temp < cache){
         cache = temp;
         result = entries[i][0] ;

      }
   }
   return +result;

}

let obj = {"1":3,"3":3,"5":3}


console.log(nexus(obj));