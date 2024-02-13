// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


//fazendo a operação direto no valor de uma propriedade de objeto
function basicOp(operation, value1, value2){
    let operationType ={

        '-':value1 - value2,
        '+':value1 + value2,
        '*':value1 * value2,
        '/':value1 / value2,
    }
    return operationType[operation];
}

console.log(basicOp("+", 4, 7))

//criando metodos de objeto
function basicO1(operation, value1, value2){
    let operationType ={

        '+':(value1,value2) => value1 + value2,
        '-':(value1,value2) => value1 - value2,
        '*':(value1,value2) => value1 * value2,
        '/':(value1,value2) => value1 / value2,
    }
    return operationType[operation](value1,value2);
}

//usando eval
//A função eval() computa um código JavaScript representado como uma string. eval tem problemas de segurança, uso de eval não é boa pratica
function basicOp2(o, a, b) {
    return eval(a+o+b);
  }