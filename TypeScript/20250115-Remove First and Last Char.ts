export function removeChar(str: string): string {
   return str.slice(1,str.length-1);
}

console.log(removeChar('asdfghkl'));