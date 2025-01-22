//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
//In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.


function alphabetPosition(text) {
    let result = [];
    text.toLowerCase().split('').forEach(elem =>{
        if( elem.charCodeAt()-96 > 0 && elem.charCodeAt()-96 < 27)
        result.push(elem.charCodeAt()-96);
    });
    return result.join(' ')
}



console.log(alphabetPosition('The sunset sets at twelve o clock'));
