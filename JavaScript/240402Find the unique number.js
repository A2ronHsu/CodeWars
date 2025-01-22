//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let obj = {};
    arr.forEach(elem =>{
        if (obj[elem] == null) {
            obj[elem] = 1;
        }else{
            obj[elem]+= 1;
        }
    })
    let index = Object.values(obj).indexOf(1)
    return +Object.keys(obj)[index];
}

console.log(findUniq([5,5,5,5,4,5,5,5,]));
  