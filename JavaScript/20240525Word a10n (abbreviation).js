function abbreviate(string) {
    let result = '';
    let stringArray = [...string.matchAll(/\b\w+\b|\W+/g)];
    let regex = new RegExp(/\W/);
    for (let cur of stringArray){
        if(regex.exec(cur[0])){
            result+=cur[0]
        }else if(cur[0].length<=3){
            result+=cur[0];
        }else{
            result+=cur[0][0]+`${cur[0].length-2}`+cur[0][cur[0].length-1];
        }
    }
    
    return result;

}

console.log(abbreviate('elephant-rides are......... really fun!'))

//esse é melhor
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);

}


//ou assim
function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(word) {
      return word[0] + (word.length - 2) + word.slice(-1);
    });
}

//ou assim
function abbreviate(string) {
    return string.replace(/\B\w{2,}\B/g, match=> match.length);
  }