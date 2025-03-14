//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript
// export function solution(input: number): string {
//    let result='';
//    let number = input;
//    let decArr = [1000,500,100,50,10,5,1];
//    let romArr = ['M','D','C','L','X','V','I'];

//    for(let i = 0; i < decArr.length; i+=2){
//       const repeatParam = Math.trunc(number/decArr[i]);
//       if(number>0){
//          if(repeatParam == 9){
//             result+= romArr[i]+romArr[i-2];
//          }else if(repeatParam == 4){
//             result+= romArr[i]+romArr[i-1];
//          }else if(repeatParam < 5){
//             result+= romArr[i].repeat(repeatParam);
//          }else if(repeatParam > 4){
//             result+= romArr[i-1]+romArr[i].repeat(repeatParam-5);
//          }

//          number -= repeatParam*decArr[i];
//       }
      
//    } 

//    return result;
// }

function solution(number: number):string{
   const map = {
      1000 : 'M',
      900 : 'CM',
      500 : 'D',
      100 : 'C',
      90 : 'XC',
      50 : 'L',
      10 : 'X',
      9 : 'IX',
      5 : 'V',
      1: 'I'
   };

   
   return '';
}

console.log(solution(3008));
console.log(Math.trunc(3999/1000));