//função de potenciação de x elevado a n com recursão
function power(x,n){
    if ( n == 0) return 1
    else{
        return n == 0? 1 : x*power(x,n-1);
    }
}
console.log('power(x,n)', power(2,10));

//calcule a soma de todos os valores de um array de reais
function somaArr(arr, i = 0){
    if ( i < arr.length) {
        // console.log(arr[i])
        return arr[i]+somaArr(arr,i+1);
    } 
    return 0;
}
console.log('somaArr(arr)', somaArr([1,2,3,4,5]))

//Dado um array de inteiros e o seu número de elementos, inverta a posição dos seus elementos.
function invert(arr, n, i = 0){
    if( n - i < 1){
    //    console.log("n - i < 1",arr);
        return arr;
    }
    if( n > arr.length){
//        console.log ("n > arr.length",arr)
        return invert(arr, n-1,i);
    }
//    console.log('noraml ',arr);
    [arr[n-1] , arr[i] ]= [arr[i] , arr[n-1]]
    return invert(arr, n-1,i+1);
}
console.log('invert(arr, n, i = 0)', invert([1,2,3,4],4));

//Escreva uma função recursiva que determine quantas vezes um dígito K ocorre em um número natural N. Por exemplo, o dígito 2 ocorre 3 vezes em 762021192
