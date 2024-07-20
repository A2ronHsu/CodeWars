//https://www.codewars.com/kata/5818c52e21a33314e00000cb/train/javascript


const sortArrays = (arr1,arr2) => {

   const idxArr = (arr) => {
      let result = []
      for (let i = 0; i < arr.length; i++){
         result.push([arr[i],i]);
      }
      return result
   }
   let idxArr1 = idxArr(arr1);
   let idxArr2 = idxArr(arr2).sort((a,b)=>a[0]-b[0]);


   console.log(idxArr1)
   console.log(idxArr2)

   


};



const arr1 = [5,4,3,2,1];
const arr2 = [6,5,7,8,9];

console.log(sortArrays(arr1,arr2));
