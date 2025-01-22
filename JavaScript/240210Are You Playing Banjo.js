// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//usando um operador ternario e uma variavel auxiliar de comparação
function areYouPlayingBanjo(name) {
    let rR = 'rR'; 
    return rR.includes(name[0])? name + " plays banjo" : name + " does not play banjo";
}

let nameArr = ["Aaron", "Ringo", "raul", "Paul", "Sebastian"];

nameArr.forEach(elem=> console.log("areYouPlayingBanjo :",areYouPlayingBanjo(elem)));

//usando expressões regulares
function areYouPlayingBanjo2(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

nameArr.forEach(elem=> console.log("areYouPlayingBanjo2 :",areYouPlayingBanjo2(elem)));