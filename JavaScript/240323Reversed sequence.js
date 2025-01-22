// const reverseSeq = n => {
//     let arr = [];
//     for (let i = n; i>0;i--){
//       arr.push(i);
//     }
//     return arr;
//   };





const reverseSeq = n => Array.from({length: n}, () => {
    console.log(n)
    return n--;
})
console.log(reverseSeq(5))