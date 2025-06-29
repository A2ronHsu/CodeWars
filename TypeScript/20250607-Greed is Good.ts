//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/typescript
export function score(dice: number[]): any {
   const points: { [key: string]: number } = {
      31: 1000,
      36: 600,
      35: 500,
      34: 400,
      33: 300,
      32: 200,
      1: 100,
      5: 50
   }

   let scoreFreq: { [key: number]: number } = {};

   for (const score of dice) {
      if (!scoreFreq[score]) scoreFreq[score] = 0;
      scoreFreq[score]++
   }

   let result = 0;

   for (let key in scoreFreq) {
      if (scoreFreq[key] >= 3) {
         result += points[`3${key}`] | 0;
         result += scoreFreq[key] % 3 * points[`${key}`] | 0;
      }else{
         result += scoreFreq[key] * points[`${key}`] | 0;
      }
   }

   return result;
}

console.log(score([5, 1, 3 , 4, 1]));