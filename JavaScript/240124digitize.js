//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    if(!Number.isInteger(n) || n < 0 ) {
        return 'somente numero inteiro positivo';
    }
    const reversedNumberArr = n.toString().split('').reverse();
    return reversedNumberArr.map(element => parseInt(element));

}

const number = 1234567890;
const dig = digitize(number);

console.log(`reverso de ${number} é ${dig}`)
console.log(dig);