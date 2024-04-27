//https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript
const cellsNeibouthoodCount = (cells,h,v) => {
    let count = 0;
    for(let i = h-1; i < h+2; i++){
        for(let j = v-1; j<v+2;j++){
            if(i>-1 && j>-1 && i<3 && j<3) {
                if (cells[i][j] === 1) ++count;
            };
        }
    }
    return count;
}

const liveOrDie = (cell,i,j) => {
    let count = cellsNeibouthoodCount(cell, i, j);
    if(cell[i][j] === 1 && count < 3) return 0;
    if(cell[i][j] === 1 &&count > 4) return 0;
    if(cell[i][j] === 1 && (count === 3 || count === 4) ) return 1;
    if(cell[i][j] === 0 && count === 3) return 1;
    return 0;
}

const haveBoderPopulation = (cells) =>{

    for(let i = 0; i < cells[0].length;i++){
        if (cells[0][i] === 1) return true;
    }
    for(let i = 0; i < cells[cells.length-1].length;i++){
        if (cells[cells.length-1][i] === 1) return true;
    }
    for(let i = 1; i < cells.length-1; i++){
        if( cells[i][0] === 1) return true;
    }
    for(let i = 1; i < cells.length-1;i++){
        if (cells[i][cells[i].length-1] === 1) return true;
    }
    return false;
}

const expandedCells = (cells) =>{
    const rows = cells.length;
    const columns = cells[0].length;
    let newCells = new Array(rows);
    for (let i of newCells){
        newCells[i] = new Array(columns).fill(0);
    }

    return newCells;
}



function getGeneration(cells, generations) {
    if(cells.length > 0){
        let nthGenerationCells = cells;
        for(let g = 0; g < generations;g++){
            let result =[];

            for(let i = 0; i < nthGenerationCells.length; i++){
                result.push([])
                for(let j = 0; j<nthGenerationCells[i].length;j++){
                    result[i].push(liveOrDie(nthGenerationCells,i,j));
                }
            }
            nthGenerationCells = result.slice();
        }
        return nthGenerationCells;
        }
    return [[]]
}




const cells = [
    [1,0,0],
    [0,1,1],
    [1,1,0]
]
const cells2 = [
    [0,1,0],
    [0,0,1],
    [1,1,1]
]

// console.log(getGeneration(cells,1));
// console.log(getGeneration(cells2,5));

console.log(expandedCells(cells));