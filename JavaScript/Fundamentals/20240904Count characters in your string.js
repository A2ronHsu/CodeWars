//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
   let result = {};
   if (string.length == 0) return {};
   for (let char of string){
      if (result[char]) result[char]++
      else result[char] = 1;
   }
   return result;
}

console.log( count("abbcccdddd"));