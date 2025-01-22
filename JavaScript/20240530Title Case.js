//https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
    let wordArr = minorWords.split(' ');
    let ttlArr = title.toLowerCase().split(' ')
    let result = [];
    for(let cur of ttlArr){
        if(wordArr.includes(cur))
            result.push(cur);
        else{
            result.push(`${cur[0].toUpperCase()}`+cur.slice(1))
        }
    }
    result[0] = result[0][0].toUpperCase()+result[0].slice(1);
    return result.join(' ');
}
let str = 'a clash of KINGS'; 
console.log(titleCase(str,'a an the of'))
// console.log(str.slice(1))
