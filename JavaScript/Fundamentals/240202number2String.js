//We need a function that can transform a number (integer) into a string.

//usando template string
function numberToString(num) {
   return `${num}`; 
}


//outras formas de fazer o mesmo seriam
//usando o metodo .toString
function numberToString1(num) {
    return num.toString();
}

//usando a função construtora da classe String
function numberToString2(num) {
    
    return String(num);
}

//concatenando o numero com uma string vazia
function numberToString3(num) {
    return ''+num;
}

//e essa coisa. Aqui se atribui a referencia da função construtora String() para a variavel numberToString4, de tal forma que a variavel passa a ser um alias da função construtora String(). Pontanto, fazer numberToString4() é a mesma coisa que fazer String()
numberToString4 = String; 




console.log(numberToString4(5));