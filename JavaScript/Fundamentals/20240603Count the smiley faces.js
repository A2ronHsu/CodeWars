//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys2(arr) {
    if(arr.length === 0 ) return 0;
    let regex = /([:;][-~][\)D]|[:;][\)D])/g;    
    let string = arr.join('');
    let faceArr = string.match(regex)
    return faceArr ? faceArr.length : 0;
}


function countSmileys(arr) {
    if(arr.length === 0 ) return 0;
    let count = 0;
    let regex = /([:;][-~][\)D]|[:;][\)D])/g;
    for (let elem of arr){
        if(elem.match(regex)) count++;
    }
    return count
}


console.log(countSmileys([':)', ';(', ';}', ':-D']))


function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);