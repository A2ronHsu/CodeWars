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

console.log ("contaDig(k, n, count = 0)", contaDig(2, 762021192))

//Um problema típico em ciência da computação consiste em converter um número da sua forma decimal para a forma binária.
function dec2bin(n){
    if(n == 0) return '';
    return dec2bin(parseInt(n/2))+`${n%2}`
}
console.log("dec2bin(n)", dec2bin(3))

//teste se n é primo com recursão;
function prime(n,i=n-1){
//    console.log('prime',i);
    if(n%i !== 0) return prime(n, i-1);
    if(n%i === 0 && i === 1) return true;
    return false; 
}
console.log("prime(n,i=n-1)",prime(2));


//enésimo numero primo com recursão
function nPrime(n, i=0, count=0){
    if (n === 0) return 0;
    if (n === count) return i-1;
    if (prime(i)) {

        return nPrime(n, i+1, count+1);
    }else{
        return nPrime(n, i+1, count);
    } 
}
 console.log("nPrime", nPrime(5));


//O máximo divisor comum (MDC) de dois números inteiros x e y pode ser calculado usando-se uma definição recursiva: ● MDC(x, y) = MDC(x − y, y), se x > y ● MDC(x,y) = MDC(y,x) ● MDC(x,x) = x
function mdc(x,y, n=1, arr = []){
    let primenumber = nPrime(n);
    if( x === y) return x;
    
    if( x%primenumber === 0  && y%primenumber === 0){
        arr.push(primenumber);
        return mdc(x/primenumber, y/primenumber, n, arr);
    }
    if( x%primenumber !== 0 && y%primenumber !== 0){
        return mdc(x,y,n+1,arr)
    }
    if(arr.length === 0) return 1;
    return arr.reduce((acc, cur)=> acc*cur);
}
console.log(mdc(1,2));
