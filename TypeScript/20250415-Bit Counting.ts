// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/typescript

export function countBits(n:number):any {
   const binary = n.toString(2);
   const binary1s = binary.replace(/0/g,'').length;
   return binary1s;
}

console.log(countBits(1234));

