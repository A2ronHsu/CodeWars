//Count the number of divisors of a positive integer n.
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

//para calcular todos os divisores usei o conceito de combinatória: multiplicando todos expoentes de um fator primo com o outro.
//para calcular quais numeros primos usar na fatoração, usei o crivo de atkins

function sieveOfAtkin(limit) {
    const primes = [2, 3];
    const isPrime = Array(limit + 1).fill(false);

    // Marcando os números candidatos como verdadeiros ou falsos
    for (let x = 1; x * x <= limit; x++) {
        for (let y = 1; y * y <= limit; y++) {
            let n = (4 * x * x) + (y * y);
            if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
                isPrime[n] = !isPrime[n];
            }

            n = (3 * x * x) + (y * y);
            if (n <= limit && n % 12 === 7) {
                isPrime[n] = !isPrime[n];
            }

            n = (3 * x * x) - (y * y);
            if (x > y && n <= limit && n % 12 === 11) {
                isPrime[n] = !isPrime[n];
            }
        }
    }

    // Marcando múltiplos dos quadrados como não primos
    for (let n = 5; n * n <= limit; n++) {
        if (isPrime[n]) {
            for (let k = n * n; k <= limit; k += n * n) {
                isPrime[k] = false;
            }
        }
    }

    // Adicionando os números primos ao array de primos
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

const primes = sieveOfAtkin(10000000); // O 10.000º número primo é o 104729



function getDivisorsCnt(n){
    let i = 0;
    let count = new Object();
    while (n>1){
        let prime = primes[i];
        console.log(i);
        if (n % prime == 0) {
            if (count.hasOwnProperty(prime)){
                count[prime] = count[prime]+1;
            }
            else {
                count[prime] = 1;
            }
            n = n/prime;
            
        }else{
            i++;
        }
    }
    let values = Object.values(count);

    return values.reduce((acc,cur)=>{return acc *= (cur+1)},1);
}
//let primes = nthPrime(10000);
console.log(primes)
console.log( getDivisorsCnt(36));



//na verdade erá só eliminar metade dos numeros possiveis como divisores com uma raiz quadrada
function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}