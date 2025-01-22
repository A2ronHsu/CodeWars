export function addLength(str: string) : string[] {
   return str.split(' ').map(word => word = `${word} ${word.length}`);
}

console.log(addLength('apple ban'));