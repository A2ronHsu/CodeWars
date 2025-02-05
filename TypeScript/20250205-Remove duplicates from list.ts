//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/typescript

export const distinct = (a: number[]): number[] => {
   let result : number[]= [];
   a.forEach(elem=>{
      if (!result.includes(elem)) result.push(elem);
   })
   return result;
}

const array = [1, 2, 1, 1, 3, 2];

console.log(distinct(array));

const distinctWithSet = (a: number[]):number[] =>{
   return [... new Set(a)];
}
console.log(distinctWithSet(array));

console.log((new Set(array)));