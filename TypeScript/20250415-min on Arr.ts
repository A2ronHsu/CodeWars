// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

function findSmallestInt(arr:number[]) {
   let number = arr[0];
   for (let element of arr){
      if (element < number) number = element;
   }   

   return number;
}

console.log(findSmallestInt([34, -345, -1, 100]));