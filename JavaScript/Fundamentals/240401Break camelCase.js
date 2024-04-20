//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result = []
    for (let i = 0; i < string.length; i++){
        if (upperCaseArray.includes(string[i])) result.push(' ');
        result.push(string[i]);
        console.log(i);
    }
    return result.join('');
}

console.log(solution("camelCasing"));

//preciso aprender usar regex
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }
  