// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//usando o built-in Object e construtor Number(). Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const stringToNumber = function(str){
    return Number(str);
}

console.log("stringToNumber", typeof(stringToNumber('123.123')) , stringToNumber('123.123'));


//usando a função parseInt(), doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
var stringToNumber2 = function(str){
    return parseInt(str); // além da do parametro str, parseInt pode receber um segundo parametro radix indicando a base em que a string deve ser expressa
}
console.log("stringToNumber2", typeof(stringToNumber2('123.123')) , stringToNumber2('123.123')); //aceita somente a parte inteira da string?
console.log("stringToNumber2", typeof(stringToNumber2('ff')) , stringToNumber2('ff')); 

//usando o operador uniario + e a coersão de tipo do JavaScript, doc: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
var stringToNumber3 = function(str){
    return +str;
}
