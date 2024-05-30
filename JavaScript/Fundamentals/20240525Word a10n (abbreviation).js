function abbreviate(string) {
    let result = '';
    let stringArray = [...string.matchAll(/\b\w+\b|\W+/g)];
    let regex = new RegExp(/\W/);
    for (let i = 0; i < stringArray.length; i++){
        let cur = stringArray[i][0]
        if(regex.test(cur)){
            result+=cur;
        }
        
    }
    
    return result;

}

console.log(abbreviate('internationalization... Accessibility'))