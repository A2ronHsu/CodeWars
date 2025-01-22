//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// Input validation: If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list below 2 elements, return 0.


function sumArray(arr) {
    if(arr === null || arr === undefined || arr=='' || arr.length<3 || typeof(arr) !== "object") return 0;
    let sorted = arr.sort((a,b)=> a-b)
    sorted.pop();
    sorted.shift();
    return sorted.reduce((acc,cur)=> acc+cur);
}




array = [-6, 20, -1, 10, -12 ];

console.log(array)
console.log(sumArray(array))
console.log(sumArray([1]))
console.log(sumArray([-1,2]))
console.log(sumArray())
console.log(sumArray(null))
console.log(sumArray('  '));


//aqui uma resolução interessante
const sumArray2 = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
//usando arrow function para retornar a sumArray2 o resultado do teste
// a tal que a == true ? sort a. slice as pontas (index 1 e - 1) . reduce o que sobrou : 0
//aqui se usou os truthy e falsy para validar o array de entrada no operador ternario.
//para truthy ordenamos com sort, eliminamos as pontas com slice nos indice 1 e -1 (equivalente ao ultimo indice), e reduce o que sobrou
//para falsy retornamos 0

function sumArray3(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }
//veja sobre .isArray em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// aqui se usa .isArray para validação
//se subtrai o ultimo e o primeiro com um metodo Math.min e Math.max em conjunto com um spread operator.


//outras resolucoes https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript


