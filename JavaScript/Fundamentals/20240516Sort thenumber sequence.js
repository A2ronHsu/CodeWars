//https://www.codewars.com/kata/5816b76988ca9613cc00024f/train/javascript
function sortSequence1(sequence) {
    let sequenceObject= {}
    let key = 0;
    let array = [];
    for (let i = 0; i<sequence.length; i++){
        if(sequence[i]){
            array.push(sequence[i]);
        }
        else{
            array.sort((a,b)=>a-b)
            array.push(0);
            sequenceObject[key] = { 
                arr: array,
                sum: array.reduce((acc,cur) => acc+cur)
            }
            key++;
            array = []

        }
    }
    array = Object.values(sequenceObject).sort((a,b) => a.sum-b.sum);
    let result = [];
    for ( let i in array){
        result = result.concat(array[i].arr);
    }
    return result;
}



let array = [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0];
console.log(sortSequence(array));