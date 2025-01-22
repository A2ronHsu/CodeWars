//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2){
    if (array1 && array2){

        let arr1 = array1.map(cur => cur*cur).sort((a,b)=>a-b);
        let arr2 = array2.sort((a,b)=>a-b)
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] != arr2[i]) return false
        }
        return true ;
    }
    return false;
}

let a = [121, 144, 19, 161, 19, 144, 19, 11]  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361, 1]

console.log(comp(a,b));




//esse é mais bonito
function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}
