// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//usando metodos
function getCount(str) {
    let count = 0;
    const vowels ='aeiou';
    str.split('').forEach(element => {
        if (vowels.includes(element)) count++;         
    });
    
    return count;
}

console.log(getCount('aeiou'));

//usando expressão regular
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

//usando filter()
function getCount3(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }