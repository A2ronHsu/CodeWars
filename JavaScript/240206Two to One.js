//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


//criei 2 funções axuliares para relsover o problema
function longest1(s1, s2) {
    let resultstr = [];
    let str=s1.concat(s2)
    selectChar = (str,i) => str.slice(i,-str.length+i+1); //seleciono o char que quero comparar com o resto da str a direita dele
    slicedArr = (str,i) => str.slice(i+1);//slice a string a direita do char selecionado
    for (i=0; i<str.length-1; i++){ //itero sobre str até o penultimo elemento
        if(!slicedArr(str,i).includes(selectChar(str,i))){ // se o char selecionado nao estriver includes no arr scliced, que dizer que ele é unico, portanto...
            resultstr.push(selectChar(str,i));//... push o char selecionado no resultstr;
        }        
    }
    resultstr.push(str[str.length-1]); //push o ultimo elemento que faltava do str
    return resultstr.sort().join(''); //ordeno e join para o string final
}

console.log("longest1",longest1("aretheyhere","yestheyarehere"));

//usando um Set obteria o mesmo resultado
const longest2 = (s1, s2) => [...new Set(s1+s2)].sort().join('');
//o objeto construtor Set() pode tornar qualquer sequencia de valores em um objeto com valores unicos. Como uma string é uma sequencia de chars, Set armazena cada char como uma pripriedade de objeto. Set() nao possue indice, mas é iteravel.
//nesse exemplo usamos o operador de espalhamento spread '...' para passar em um array [] cada elemento do objeto resultante de Set(): [...new Set(s1+s2)]; assim podemos usar metodos de array como sort e join para obter o resultado desejado.

console.log("longest2",longest2("aretheyhere","yestheyarehere"));

//mais uma variação usando Set()
function longest3(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}
console.log("longest3",longest3("aretheyhere","yestheyarehere"));


//nesta resolução usaram uma abordagem parecida a minha, mas melhor
//aqui longest4 ordena primeiro os char, char iguais estarão em sequencia
function longest4(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split(""); 
    s4 = s4.sort().filter(function(element, index, array){ //ordeno a sequecia de char, o char iguais estarão em sequencia
      return element !== array[index - 1];//se o char atual em element for direfente ao char anterior então push em s4
    });
    return s4.join("");//junta os element de s4 para a string e pronto
}
console.log("longest4",longest4("aretheyhere","yestheyarehere")); //eu podia ter pensado nisso

//mais uma resolução parecida ao anterior longest4
//aqui usa-se o indexOf para comparar o index do item com a posição pos atual. indexOf retorna a primeira occorencia de item a partir do indice 0;
const longest5 = (s1, s2) => s1.concat(s2)
    .split('')
    .sort()
    .filter((item, pos, self) => self.indexOf(item) == pos)
    .join('')
;

console.log("longest5",longest5("aretheyhere","yestheyarehere"));

//uma resolução com expressões regulares
function longest6(s1, s2) {
    return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}
