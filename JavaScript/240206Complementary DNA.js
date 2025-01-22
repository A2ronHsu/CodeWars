//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//usando metodos e um objeto para converter a "chave" de dna em "valor" correspondente, 1ms
function dnaStrand(dna){
  let keyDNA = {
    A : 'T',
    T : 'A',
    G : 'C',      
    C : 'G'
  }    
return dna.split('').map(elem => keyDNA[elem]).join('');
}

console.log(dnaStrand("ATTGC"));

//usando um objeto auxiliar DNASTrand e expressões regulares
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//antes eu usaria if-else ou switch para resolver isso

