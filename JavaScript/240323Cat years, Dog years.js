//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
    const catYears = humanYears => {
        if (humanYears == 1 ) return 15;
        if (humanYears == 2 ) return 24;
        if (humanYears >2) return 24+(humanYears-2)*4; 
    }

    const dogYears = humanYears => {
        if (humanYears == 1 ) return 15;
        if (humanYears == 2 ) return 24;
        if (humanYears >2) return 24+(humanYears-2)*5;
    }
    return [humanYears,catYears(humanYears),dogYears(humanYears)];
}
  

//esse é melhor
var humanYearsCatYearsDogYears2 = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }