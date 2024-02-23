//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(str){
    const midIndex = str.length/2;
    let resultStr;
    resultStr = midIndex%1 ? resultStr = str[midIndex-0.5] : resultStr=str[midIndex-1]+str[midIndex];
    return resultStr;  
}


let str = "abcd";
console.log(getMiddle(str));
console.log(getMiddle(str));


//metodos de string que poussuem index como parametro arredondam index para floor sozinhos(?)
console.log(str.slice(0.5,3.9))

//usando slice()
function getMiddle2(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}

//usando substr()
function getMiddle3(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//usando charAt()
function getMiddle4(s){
    return s.length % 2 == 0 ? s.charAt((s.length-1) / 2) + s.charAt((s.length+1) / 2) : s.charAt(s.length / 2);
}
