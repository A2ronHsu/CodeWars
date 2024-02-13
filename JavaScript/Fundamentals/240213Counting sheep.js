//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


//usando forEach()
function countSheeps(sheep) {
    let acc=0;
    sheep.forEach(elem => {if (elem) acc++})
    return acc;
}

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))

//usando reduce()
function countSheeps2(sheep) {
    return sheep.reduce((acc,cur)=>{return cur? ++acc: acc},0);
}

console.log(countSheeps2,countSheeps2([undefined,null,false,true,true,false,null,undefined]))

//usando filter()
function countSheeps3(arrayOfSheeps) {
    return arrayOfSheeps.filter(elem => elem).length; //filter() itera sobre os elementos e retorna os elementos que passam do teste booleano da função callback
}
console.log(countSheeps3([undefined,null,false,true,true,false,null,undefined]))

//usando filter(Boolean)
function countSheeps4(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length; //filter() recebe uma referencia a função construtora Boolean. a função construtora Boolean(n) devolve thruty ou falsy de n;
}
console.log(countSheeps4([undefined,null,false,true,true,false,null,undefined]))