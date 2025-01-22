function order(words){
   const wordArr = words.split(' ');
   let result = '';
   for (let i = 0; i < words.length; i++){
      for (let word of wordArr ){
         if ( word.includes(`${i+1}`)){ 
            if( i == 0) result += word
            else result += ' '+word;
         } 
      }
   }
   return result;
}

console.log(order("is2 Thi1s T4est 3a"));