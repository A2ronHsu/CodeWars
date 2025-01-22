//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

//usando objetos e contando a quantidade de ocorrencias
function stray1(numbers) {
    let count = {};
    for(n of numbers){
        if(count[n]){
            ++count[n];
        }else{
            count[n] = 1;
        }
    }
    for(n of numbers){
        if (count[n] == 1) return n;
    }
}

//usando if testando 3 elementos para 3 casos diferentes
function stray2(numbers) {

    for ( let i = 2; i < numbers.length; i++ ){
        if (numbers[i]!==numbers[0] && numbers[i]!== numbers[1]) return numbers[i];
        if (numbers[i]===numbers[0] && numbers[i]!== numbers[1]) return numbers[1];
        if (numbers[i]!==numbers[0] && numbers [i]=== numbers[1]) return numbers[0];
        
    }
}

//comparando se o ultimo index do elemente é igual ao primeiro
function stray3(numbers){
    for (let n of numbers){
       if (numbers.indexOf(n) === numbers.lastIndexOf(n)){return n}
    }
}

//usando XOR ^ (retorna true quando o a e b são diferentes), essa solução não funciona para um array de tamanho par
const stray4 = num => num.reduce((a,b)=>a^b)

console.log(stray4([1,1,1,3,1,1]));