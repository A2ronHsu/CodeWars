//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = (iterable)=>{
    let arr = [];
    for ( let i =0 ; i < iterable.length; i++){
        if( iterable[i-1] != iterable[i]){
            arr.push(iterable[i]);
        }
    }
    return arr;
}

let arr = 'AAAABBBCCDAABBB';

//usando .filter()
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

