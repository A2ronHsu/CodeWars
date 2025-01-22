//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    let str = x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
    console.log(str);
    return str;
}

console.log(isPalindrome(Abba))