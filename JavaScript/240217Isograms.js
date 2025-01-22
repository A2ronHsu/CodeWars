//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


//usando um for
const isIsogram = (str)=>{
    let strArr = str.toLowerCase().split('');
    for (let elem of strArr){
        if(strArr.indexOf(elem) !== strArr.lastIndexOf(elem)) return false
    }
    return true;
}

//console.log(isIsogram('aba'));


//usando recursão
const isogramRecursion = (charArr, index)=>{
    let elem = charArr[index];
    let result = charArr.indexOf(elem) == charArr.lastIndexOf(elem);
    if(!result || index === charArr.length-1) {
        return result;
    }else{
        return isogramRecursion(charArr, index+1);
    }
}

const isIsogram2 = (str)=>{
    let strArr = str.toLowerCase().split('');
    if(!str) return true;
    return isogramRecursion(strArr, 0);;
}




console.log([].lastIndexOf([]));

//usando um Set
function isIsogram3(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//usando regex e .test()
function isIsogram4(str){ 
    return !/(\w).*\1/i.test(str)
}

//usando regex .match()
function isIsogram5(str){
    return !str.match(/([a-z]).*\1/i);
}


//depois tem essa coisa
function isIsogram(str) {
    var map = {};
    var result = true;
    str.split('').forEach(function(char) {
      if (map[char.toUpperCase()] === undefined) {
        map[char.toUpperCase()] = 1;
      } else {
        result = false;
      }
    });
    return result;
}

//isso é interessante, usando .every
function isIsogram(str) {
    return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
  }