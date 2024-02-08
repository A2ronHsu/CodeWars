//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return (h*3600+ m*60+s)*1000;
}

//console.log(past(1,1,1));

//usando arrowfuction
const past2 = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

//console.log(past2(1,1,1));

//usando o construtor Date()
function past3(h, m, s){
    // o metodo .setHours retorna o timestamp do valor dado no parametro. Um timestamp é um valor em milisegundos contando da meia noite de 01/01/1970 até o momento atual 
    const setTime = new Date().setHours(h, m, s); //portanto, aqui temos o valor em milisegundos com uma defasagem de h horas, m minutos e s segundos do momento atual
    const midnight = new Date().setHours(0, 0, 0);//aqui temos o momento atual em milisegundos
    console.log(setTime); 
    console.log(midnight);//
    return (Math.round((setTime - midnight)/10))*10; //subtraindo um do outro temos um intervalo de tempo dem milisegundos
}

console.log(past3(1,1,1));