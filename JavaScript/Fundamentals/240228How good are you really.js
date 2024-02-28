//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((acc,cur) => {
        return acc+=cur/(classPoints.length);
    },0)
    return yourPoints > average; 
}


function betterThanAverage2(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  