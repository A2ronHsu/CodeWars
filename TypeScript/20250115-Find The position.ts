export function position(alphabet:string):string {
   const alphaNumber : number = alphabet.charCodeAt(0)-96;
   return `Position of alphabet: ${alphaNumber}`;
}

console.log(position('a'))