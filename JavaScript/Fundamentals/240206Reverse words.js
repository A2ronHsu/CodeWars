//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//usando metodos de array e string
reverseWords = (str) => {
    return str.split(' ')
        .map(elem => elem.split('').reverse().join(''))
        .join(' ');

    
}
console.log(reverseWords("12 23 34 45"));


//tambem usando metodos só que melhor e executa mais rapido, como não pensei nisso
function reverseWords2(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords2("12 23 34 45"));

//aqui usando expressões regulares, tão rapido como reverseWord2
var reverseWords3=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
console.log(reverseWords3("12 23 34 45"));

