//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
    if ( n == null || n <=0 || n%2 === 0) return null;
    let result = '';
    for( let i = 0; i<n; i++){
        if(Math.floor(n/2)-i >-1){
            result += ' '.repeat(Math.floor(n/2)-i);
            result += '*'.repeat(i*2+1)
            result += '\n';
        }else{
            result += ' '.repeat(i -Math.floor(n/2));
            result += '*'.repeat(2*n-1-i*2);
            result += '\n'
        }
    }
    return result;
}




console.log(diamond(7));

//acima implementei o valor absoluto com uma condicional, eu poderia ter usado a função abs pra isso
function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
}