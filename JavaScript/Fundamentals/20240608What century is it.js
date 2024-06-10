//https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year){
    let century = Math.floor(year/100)+(year%100 !== 0);
    let ordinal = {
        1:'st',
        2:'nd',
        3:'rd',
    }
    if(century>20){
        if (ordinal[century%10]){
            return `${century}${ordinal[century%10]}`
        }else{
            return `${century}th`
        }
    }else{
        if(century<4){
            return `${century}${ordinal[century]}`;
        }else{
            return `${century}th`
        }
    }
}

console.log(whatCentury('1234'));
console.log(whatCentury("2000"));