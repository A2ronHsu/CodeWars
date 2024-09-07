//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript



function high(x=''){
   let result = '';
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let scores = {};
   for (let i = 0; i < alphabet.length; i++ ){
      const char = alphabet[i];
      scores[char] = i+1;
   }

   function wordScore(word){
      let score = 0;
      for (let char of word){
         score += scores[char];
      }
      return score;
   }

   const phrase = x.split(' ');

   let temp = 0;
   
   for (let word of phrase){
      let score = wordScore(word);
      if ( score > temp) {
         temp = score;
         result = word;

      }
   }
   console.log(phrase);
   return result;  
}

console.log( high('aaaa bbbb'))