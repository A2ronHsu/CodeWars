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
function nTimes(k,n){
    let arr = String(n).split('');
    let count = 0;
    const ntimes = (k, arr, i = 0, count)=>{
        if (!arr.includes(`${k}`)) return count;
        if ( i < arr.length){
            if(arr[i] === `${k}`) count++;
            return ntimes(k, arr, i+1, count)
        }
        return count;
    }
    return ntimes(k,arr,0,count);
}
console.log('ntimes(k,arr,0,count)', nTimes(2,762021192));

function contaDig(k, n, count = 0){
    //console.log(n);
    if (n == 0 && n == k) return 1;
    if (n == 0) return count;
    if ( n%10 === k ) count++;
    return contaDig(k,parseInt(n/10),count);
}

console.log (contaDig(2, 762021192))

//Um problema típico em ciência da computação consiste em converter um número da sua forma decimal para a forma binária.
function dec2bin(n){
    if(n == 0) return '';
    return dec2bin(parseInt(n/2))+`${n%2}`
}
console.log(dec2bin(3))