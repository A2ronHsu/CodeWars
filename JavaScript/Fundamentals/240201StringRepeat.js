//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//usando um for podemos fazer
function repeatStr (n, s) {
    let str = '';
    for ( i = 0; i < n; i++){
        str+=s;
    }

    return str;
    }



console.log('usando um for ',repeatStr(5,'a'));

  //usando o metodo .repeat() podemos fazer
function repeatStr (n, s) {
    return s.repeat(n);
    }

//usando a sintaxe de arrowFuncition teriamos
repeatStr = (n, s) => s.repeat(n);



