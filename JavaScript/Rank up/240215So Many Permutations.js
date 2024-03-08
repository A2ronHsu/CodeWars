//In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.\
//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
function swap(swaparr, indexA,indexB){
    [swaparr[indexA], swaparr[indexB]] = [swaparr[indexB], swaparr[indexA]]
}


function permutations(string, arr = string.split(''), i=0, j=1, result = []) {

}
console.log(permutations('abcd'));
