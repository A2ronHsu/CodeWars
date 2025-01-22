//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let str = new String(text).toLocaleLowerCase();
    let i = 0;
    for ( let char of str ){
        if (str.indexOf(char) != str.lastIndexOf(char)) {
            let regex = new RegExp(char,'g')
            str = str.replace(regex,'')
            console.log(str)
            i++;
        }
    }
    return i;
}

console.log(duplicateCount('aaaaaaaaabbbcddddddde'));