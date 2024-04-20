//https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string)
{
	let correction = {
        '0':'O',
        '1':'I',
        '5':'S'
    };
    for(i=0; i<string.length; i++){
        let char = string[i];
        console.log(char, correction.hasOwnProperty(char), string )
        if(correction.hasOwnProperty(char)) string = string.replace(char,correction[char]);
    }
    return string;

}

console.log(correct("L0ND0N"));