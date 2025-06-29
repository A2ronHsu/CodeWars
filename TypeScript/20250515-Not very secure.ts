// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript

export function alphanumeric(string: string): boolean {
   return string.replaceAll(/[A-Za-z\d]/g,"")||string === ""? false : true;
}

console.log(alphanumeric(""));