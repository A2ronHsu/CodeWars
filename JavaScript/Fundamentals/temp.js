//usando reduce()
function countSheeps(sheep) {
    return sheep.reduce((acc,cur)=>{
        if(cur) {
        return ++acc;        
        }else return acc;
    },0);
}

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))