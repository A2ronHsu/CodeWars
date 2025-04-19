// https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript

export function pyramid(n: number) : Array<Array<Number>> {
   let result : Array<Array<Number>> = []
   
   if(n > 0) {
      for (let i = 1; i <= n; i++){
         let arr : number[]= new Array(i);
         arr.fill(1);
         result.push(arr);
         
      }
   }
   return result
};

console.log(pyramid(3));