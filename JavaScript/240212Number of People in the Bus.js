//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

//usando metodos
var number = function(busStops){
    return busStops.map((elem)=>elem[0]-elem[1]).reduce((acc,cur)=>acc+cur);
}
const busStops = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];

console.log(number(busStops));

const number2 = busStops => busStops.reduce((acc,cur)=>acc+cur[0]-cur[1], 0);

console.log(number2(busStops));

//usando desestruturação, aqui  o cur = [on,off]
const number3 = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off, 0);