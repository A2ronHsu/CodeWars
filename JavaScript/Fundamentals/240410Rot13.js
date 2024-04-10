//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript


function rot13(message){
    let result = '';
    for (let i=0; i<message.length; i++){
        let charCode = message.charCodeAt(i)
        if(charCode > 96 && charCode < 110  || charCode > 64 && charCode < 78){
            result+= String.fromCharCode(charCode+13);
        }else 
        if(charCode >109 && charCode < 123 || charCode > 77 && charCode <91){
            result += String.fromCharCode(charCode-13);
        }else{
            result += message[i]
        }
    }
    return result;
}


console.log(rot13('Test'));

//usando regex
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}