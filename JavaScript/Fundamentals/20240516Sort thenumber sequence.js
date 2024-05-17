//https://www.codewars.com/kata/5816b76988ca9613cc00024f/train/javascript
function sortSequence(sequence) {
    let sequenceArray= []
    let array = [];
    for (let i = 0; i<sequence.length; i++){
        if(sequence[i]){
            array.push(sequence[i]);
        }else{
            array.sort((a,b)=>a-b)
            array.push(0);
            sequenceArray.push(
                { 
                    arr: array,
                    sum: array.reduce((acc,cur) => acc+cur)
                }
            )
            array=[];
        }
    }
    sequenceArray.sort((a,b)=> a.arr.reduce((acc,cur)=> acc + cur) - b.arr.reduce((acc,cur)=> acc + cur));
    let result = []
    for(let elem of sequenceArray){
        result = result.concat(elem.arr);
    }
    

    return result;
}

function sortSequence1(sequence) {
    let matris = [];
    let array = [];
    let result = [];
    for (let i = 0; i < sequence.length; i++){
        if(sequence[i]){
            array.push(sequence[i]);
        }else{
            array.sort((a,b)=>a-b);
            array.push(0);
            matris.push(array)
            array = [];
        }
    }
    matris.sort((a,b)=>{
        return a.reduce((acc,cur)=> acc+cur) - b.reduce((acc,cur)=>acc+cur)
    })
    for (let elem of matris){
        result = result.concat(elem); 
    }
    return result; 
}



let array = [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0];
console.log(sortSequence(array));