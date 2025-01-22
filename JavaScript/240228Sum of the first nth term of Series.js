//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


//usando o objeto nativo Number
function SeriesSum(n){
    if (n === 0) return Number(0).toFixed(2);
    let acc = 0;
    for (i = 0; i < n; i++){
        acc+= 1 / (1+3*i);
    }
    
    return Number(acc).toFixed(2).toString();
}


//com recursão
function SeriesSum2(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}