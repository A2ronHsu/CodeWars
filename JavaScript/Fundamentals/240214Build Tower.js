//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

//usando um for
function towerBuilder(n) {
    let arr = new Array(n);
    for(let i = 0 ; i < n ; i++){
        arr[i]= ' '.repeat(n-1-i)+'*'.repeat(2*i+1)+' '.repeat(n-i-1);
    }
    return arr;
}

console.log(towerBuilder(6));

//usando Array.from(), https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
function towerBuilder2(n) {
    return Array.from({length: n}, function(v, k) { //criamos um objeto de tamanho n no primeiro argumento de .from(), e depois uma função para iterar sobre cada elemento do objeto.
    //o resto é similar ao o que já fiz
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

//usando map
const towerBuilder = n =>
    [...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1));
