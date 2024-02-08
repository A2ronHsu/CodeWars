//minha solucao
function duplicateEncode(Word){
    if (!(typeof(Word) === "string")) return "not a string";
    let wordArr = Word.toLowerCase().split('');
    let char ='';
    let result ='';
    for (let i=0; i < wordArr.length; i++){
      char = wordArr[i];
      wordArr[i] = '*';
      wordArr.includes(char)? result += ')': result += '(';    
      wordArr[i] = char;    
    }  
    
    return result;  
  }
  

  //usando expressoes regulares
function duplicateEncode_expressaoRegular(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }
  
  //usando somente metodos
function duplicateEncode_somenteMetodos(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
  
  { //contando o numero de caracteres repetidos
function countCharacters(chars) {
    return chars
      .reduce( function(memo, char){
        memo[char] = memo[char] ? memo[char] + 1 : 1;
        return memo;
      }, {});
  }

function duplicateEncode(word){ 
    const chars = word.split('').map(ch => ch.toLowerCase());
    const charsCount = countCharacters(chars);
    return chars
      .map( ch => charsCount[ch] > 1 ? ')' : '(' )
      .join('');
  }
  }