//https://www.codewars.com/kata/5818c52e21a33314e00000cb/train/javascript
const sortArrays = (arr1,arr2) => {

   const idxArr = (arr) => {
      let result = []
      for (let i = 0; i < arr.length; i++){
         result.push([arr[i],i]);
      }
      return result
   }
   let idxArr1 = idxArr(arr1).sort((a,b)=> a[0]-b[0]);
   let idxArr2 = idxArr(arr2).sort((a,b)=> a[0]-b[0]);

   const insertIdx = (arr, idxArr) => {
     let result = []
     for (let i = 0; i<arr.length; i++){
      result.push(arr[idxArr[i][1]])
     }
     return result;
   }

   const result1 = insertIdx(arr1, idxArr2)
   const result2 = insertIdx(arr2, idxArr1)

   return [result1, result2]   
};



const arr1 = [5,6,9,2,6,5];
const arr2 = [3,6,7,4,8,1];
// const a = [[5,1],[5,1],[7,1],[2,1],[1,1],[1,1],[3,1]];
// bubbleUp(a);
// console.log(a);
console.log(sortArrays(arr1,arr2));
