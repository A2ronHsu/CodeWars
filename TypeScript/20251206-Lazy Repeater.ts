// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/typescript

export function makeLooper(str: string): () => string {
   let currentCharIndex = 0;

   return () => {
      let result = str[currentCharIndex];
      if (currentCharIndex == str.length) {
         currentCharIndex = 0;
         result = str[currentCharIndex];
         currentCharIndex++;

      }else{
         currentCharIndex++;
      }

      return result;
   };
}

var abc = makeLooper('abc');
console.log(abc()); // should return 'a' on this first call
console.log(abc()); // should return 'b' on this second call
console.log(abc()); // should return 'c' on this third call
console.log(abc()); // should return 'a' again on this fourth call
console.log(abc()); // should return 'a' again on this fourth call
console.log(abc()); // should return 'a' again on this fourth call

