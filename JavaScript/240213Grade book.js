//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

//usando if
function getGrade (s1, s2, s3) {
    const averange = (s1+s2+s3)/3;
    if(averange<60) return 'F';
    if(averange<70) return 'D';
    if(averange<80) return 'C';
    if(averange<90) return 'B';
    if(averange<=100) return 'A';
}


//usando operador ternario, bem dificil de ler
function getGrade2 (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}


//e tem isso
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
var getGrade3=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10); //charAt(i) retorna o char no indice i, truncando i para um inteiro

console.log('0123456789'.charAt(0.1));