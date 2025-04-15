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

function solution(input: number):string{
   const map : {[key: number] : string} = {
      1000 : 'M',
      900 : 'CM',
      500 : 'D',
      400 : 'CD',
      100 : 'C',
      90 : 'XC',
      50 : 'L',
      40 : 'XL',
      10 : 'X',
      9 : 'IX',
      5 : 'V',
      4 : 'IV',
      1: 'I'
   };

   let result = '';
   let divisor = 1000;
   let number = input;
   let arr = [];
   while(number != 0){
      
      const integer = Math.floor(number/divisor);
      if (integer == 9) arr.push(map[9*divisor]);
      if (integer > 5 && integer < 9) arr.push(map[divisor*5]+map[divisor].repeat(integer-5));
      if (integer == 5) arr. push(map[divisor*5]);
      if (integer == 4) arr.push(map[4*divisor]);
      if (integer < 4) arr.push(map[divisor].repeat(integer));

   
      number -= integer*divisor;
      divisor = divisor/10;
   }
   console.log(arr);
   
   return arr.join('');
}

console.log(solution(3845));