//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript


//podemmos fazer um algoritmos de O(n) 
var summation = function (num) {
    result = 0;
    for (i=1; i < num+1; i++)
        result+=i;
    return result;
}

console.log(summation(8));

//ou podemos aplicar a formula de um progressão aritimetica de incremento 1, assim temos apenas 1 operação ao inves de n operações
const summation2 = n => n * (n + 1) / 2;

//a forma mais interesante que vi foi usando uma função recursiva
var summation3 = function f(num) {
    return num ? num + f(num-1) : 0;
}

//vamo reescrever a função anterior em summation4

summation4 = function f(num) {
    if (num){ //num será ture por até chegar 0
        console.log('num = ',num);
        return num + f(num-1) //aqui uma função recursiva
    }else return 0;

}

console.log( summation4(3));
