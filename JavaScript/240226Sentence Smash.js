//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//usando o metodo de Array, .join()
function smash (words) {
    return words.join(" ") ;
};

function smash2 (words) {
    if( words.length === 0) return '';
    result = words[0];
    for(i = 1; i< words.length; i++){
        result +=' '+words[i];
    }
    
    return result;
}