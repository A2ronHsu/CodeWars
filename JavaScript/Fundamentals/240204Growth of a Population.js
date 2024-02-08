//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

//parece um problema para um for
function nbYear(p0, percent, aug, p) {
    let years=0;
    const per=percent/100;
    for(let i=1; p0<p;i++){
        p0 += Math.trunc(p0*per+aug);
        years = i;
    }


    return years;
}

console.log(nbYear(1000,2,50,1200));

//usar o contador como variavel global foi inteligente
function nbYear2(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }



//talvez um while poderia ser melhor?

function nbYear3(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
  }

//um exemplo com uma função recursiva
function nbYear4(p0, percent, aug, p, years = 0) {
    if (p0 < p) {
      return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
    }
    return years;
  }
