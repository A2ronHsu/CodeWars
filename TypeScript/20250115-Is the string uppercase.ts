export function isUpperCase(str:string) : boolean{
   return str.toUpperCase() == str;
}

console.log( isUpperCase('aBc'));
console.log( isUpperCase('ABC'));