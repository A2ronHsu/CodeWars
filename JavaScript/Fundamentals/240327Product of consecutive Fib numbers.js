//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

//resolvi essa questão com duas funções, uma para encontrar o par de numeros de fibonaci e outra para comparar o produto desses numero com o parametro prod;
function nFibonacci(n){
    let arr = [0,1];
    if (n == 1) return [0,0];
    if (n == 2) return [0,1];
    let temp = 0;
    for( let i = 2; i < n; i++ ){
        temp = arr[0]+arr[1];
        arr.shift();
        arr.push(temp);
//        console.log(arr);
    }
    return arr
}

console.log(nFibonacci(14));

function productFib(prod){
    let [currentFib, previousFib] = [0,0];
    for(let i = 1; currentFib*previousFib <= prod; i++){
        [previousFib, currentFib] = nFibonacci(i);
        console.log(previousFib,currentFib);
        if (currentFib*previousFib == prod) return [previousFib, currentFib, true];
    }
    return [previousFib, currentFib, false];
    
}


//esse é mais bonito e simples
function productFib(prod){
  var n = 0; // esse é o numero anterior
  var nPlus = 1;  // esse é o numero atual
  while(n*nPlus < prod) {
    nPlus = n + nPlus; //aqui calculo o próximo par de numeros de fibonacci
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

//olha essa beleza tb
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

