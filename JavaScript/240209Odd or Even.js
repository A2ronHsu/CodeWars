// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven1(array) {
    if(!array.length) return "even"; // testo se o array está vazio
    return array.reduce((acc,cur)=> acc+cur)%2 == 0? "even": "odd";
    
}

console.log(oddOrEven1([]));

//outra forma de fazer é dando um valor inicial ao reduce, assim dispenso testar se o array está vazio, uma vez que se estiver, o valor inicial será 0 de qualquer forma
function oddOrEven2(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
console.log(oddOrEven2([]));