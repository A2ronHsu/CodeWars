const  zero = (callback) => typeof(callback) === 'function'? callback(0) : 0;
const  one = (callback) => typeof(callback) === 'function'? callback(1) : 1;
const  two = (callback) => typeof(callback) === 'function'? callback(2) : 2;
const  three = (callback) => typeof(callback) === 'function'? callback(3) : 3;
const  four = (callback) => typeof(callback) === 'function'? callback(4) : 4;
const  five = (callback) => typeof(callback) === 'function'? callback(5) : 5;
const  six = (callback) => typeof(callback) === 'function'? callback(6) : 6;
const  seven = (callback) => typeof(callback) === 'function'? callback(7) : 7;
const  eight = (callback) => typeof(callback) === 'function'? callback(8) : 8;
const  nine = (callback) => typeof(callback) === 'function'? callback(9) : 9;

const  plus = (val1) => (val2) => parseInt(val1+val2);
const  minus = (val1) => (val2) => parseInt(val1-val2);
const  times = (val1) => (val2) => parseInt(val1*val2);
const  dividedBy = (val1) => (val2) => parseInt(val1/val2);

console.log(nine(plus(nine())));
console.log(nine(minus(nine())));
console.log(nine(times(nine())));
console.log(nine(dividedBy(nine())));