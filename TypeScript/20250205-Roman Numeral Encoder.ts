//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript
export function solution(number: number): string {
   let input = number;
   const oneArray = [1000, 100, 10, 1];
   const fiveArray = [500, 50, 5]
   const romOneArray = ['M', 'C', 'X','I'];
   const romFiveArray = ['D', 'L', 'V']
   let result = '';

   let i = 0;
   let decCurry = 0;
   let romCurry = 0;

   while (input > 1){
      let identicalCharNumber = Math.trunc(input/oneArray[i]);
      if(identicalCharNumber){
         if(identicalCharNumber<=3){
            result += romOneArray[i].repeat(identicalCharNumber);
         }
         if(identicalCharNumber === 4){
            result += romOneArray[i+1]+romFiveArray[i];
         }
         if(identicalCharNumber < 9 && identicalCharNumber > 4){
            result += romFiveArray[i]+romOneArray[i+1];
         }
         if(identicalCharNumber === 9){
            result += romOneArray[i+1]+romOneArray[i];
         }

         input -= identicalCharNumber*oneArray[i];
      }
      console.log(i,input, identicalCharNumber,oneArray[i]);
      i++;
     
   }

   if(input == 1) result+= '1';
   

   return result;
}

console.log(solution(99));