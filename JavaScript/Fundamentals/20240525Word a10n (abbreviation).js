



function abbreviate(string) {
    let result = '';
    let stringArray = [...string.matchAll(/\b[a-zA-Z]*\b/g)];
    for (let subStr of stringArray){
        if(subStr[0] !=='' && subStr[0].length>3){
            result+=subStr[0][0]+`${subStr[0].length-2}`+subStr[0][subStr[0].length-1];
        }else if(subStr[0].length3 <= 3 && subStr[0] != ''){
            result+=subStr[0];
        }
        else if(subStr.index != string.length){
            result+=string[subStr.index]
        }
    }
    return result;

}

console.log(abbreviate('elephant-rides are really fun!'))