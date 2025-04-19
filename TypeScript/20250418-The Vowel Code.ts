//https://www.codewars.com/kata/53697be005f803751e0015aa/train/typescript

const vowels : {[key:string] : string} = {
   a : '1',
   e : '2',
   i : '3',
   o : '4',
   u : '5'
};

// turn vowels into numbers
export function encode(string: string): string {
   let inputStr : string = string;
   for (let vowel in vowels){
      if(inputStr.includes(vowel)){
         inputStr = inputStr.replaceAll(vowel,vowels[vowel]);
      }
   }
   return inputStr;
}
 
 // turn numbers back into vowels
 export function decode(string: string): string {
   let inputStr : string = string;
   for (let vowel in vowels){
      if(inputStr.includes(vowels[vowel])){
         inputStr = inputStr.replaceAll(vowels[vowel],vowel);
      }
   }
   return inputStr;
}

console.log(encode("hello"));
console.log(decode("h2ll4"));
