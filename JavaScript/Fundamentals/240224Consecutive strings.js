// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript


//usando for's
function longestConsec(strarr, k) {
    let concatString = [];
    let length = strarr.length;
    if(length === 0 || k<=0 || k>length) return "";
    for(let i=0, n=k-1; n < length; i++, n++){
        let tempStr='';
        for(let j=i; j <= n; j++){
            tempStr+=strarr[j];
        }
        concatString.push(tempStr);
    }
    const lengthArr = concatString.map(elem=> elem.length);
    const maxLengthIndex = lengthArr.indexOf(Math.max(...lengthArr));
    return concatString[maxLengthIndex];
}


let strarr =  ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];



//usando metodos: slice, map
function longestConsec2(strarr, k) {
    let concatString = [];
    let length = strarr.length;
    if(length === 0 || k<=0 || k>length) return "";
    for(let i=0, n=k; n <= length; i++, n++){
        concatString.push(strarr.slice(i,n).join(''));
    }
    let longest = '';
    concatString.forEach(elem=> {if( elem.length > longest.length) longest = elem});
    return longest;
}

let arr1 = longestConsec(strarr,2);
let arr2 = longestConsec2(strarr,2);
console.log(arr1);
console.log(arr2);

//console.log(arr1.map((elem,i)=> elem==arr2[i]? true : false));

//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/solutions/javascript