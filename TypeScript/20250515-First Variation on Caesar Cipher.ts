//https://www.codewars.com/kata/5508249a98b3234f420000fb/train/typescript

const split :string[] = (string:string[]){
  if(Math.sqrt(string.length) <= 5){
    string.slice()
  }
  return []
}

export const movingShift = (s: string, shift: number) => {
  const stringArr = s.split('');
  const result = stringArr.map((char, i) => {
    if (/[A-Z]/g.test(char)) {
      let currentCharCode: number = char.charCodeAt(0);
      const currentShift = (i + shift) % 26;
      const charCode: number = currentCharCode + currentShift;
      if (charCode > 90) {
        return String.fromCharCode(64 + (charCode - 90))
      }
      return String.fromCharCode(charCode);
    }
    if (/[a-z]/g.test(char)) {
      let currentCharCode: number = char.charCodeAt(0);
      const currentShift = (i + shift) % 26;
      const charCode: number = currentCharCode + currentShift;
      if (charCode > 122) {
        return String.fromCharCode(96 + (charCode - 122))
      }
      return String.fromCharCode(charCode);
    }
    return char;
  });
  return result;
}

export const demovingShift = (s: string, shift: number) => {
  const stringArr = s.split('');
  const result = stringArr.map((char, i) => {
    if (/[A-Z]/g.test(char)) {
      let currentCharCode: number = char.charCodeAt(0);
      const currentShift = (i + shift) % 26;
      const charCode: number = currentCharCode - currentShift;
      if (charCode < 65) {
        return String.fromCharCode(90 - (64 - charCode))
      }
      return String.fromCharCode(charCode);
    }
    if (/[a-z]/g.test(char)) {
      let currentCharCode: number = char.charCodeAt(0);
      const currentShift = (i + shift) % 26;
      const charCode: number = currentCharCode - currentShift;
      if (charCode < 97) {
        return String.fromCharCode(122 - (96 - charCode))
      }
      return String.fromCharCode(charCode);
    }
    return char;
  });
  return result.join('');
  return ""
}

const moving = "I should have known that you would have a perfect answer for me!!!";
const demoving = "J vltasl rlhr zdfog odxr ypw atasl rlhr p gwkzzyq zntyhv lvz wp!!!";

console.log(movingShift(moving,1));
console.log(demovingShift(demoving, 1));