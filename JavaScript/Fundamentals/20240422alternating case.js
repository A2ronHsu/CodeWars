String.prototype.toAlternatingCase = function () {
    const alphabeth = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for ( let i =0; i < this.length; i++){
        
        if ( alphabeth.includes(this[i])){
            result += this[i].toUpperCase();
        }else {
            result += this[i].toLowerCase();
        };
    }
    return result;
}

console.log("helloW World".toAlternatingCase()); 

//outras formas melhores de fazer isso

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}