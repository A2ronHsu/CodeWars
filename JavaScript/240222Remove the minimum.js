//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.


//usando reduce() e toSpliced(), toSpliced nao parece ser compativel com alguns ambientes
function removeSmallest(arr) {
    if (arr.length === 0) return [];
    const min = arr.reduce((acc,cur) => {
        console.log(acc, cur, acc < cur);
        return acc>cur ? acc = cur: acc;
    })
    const indexOfMin = arr.indexOf(min);
    console.log(indexOfMin);
    return arr.toSpliced(indexOfMin,1);
}

arr = [2,2,1,2,1];

console.log(removeSmallest([2,2,1,2,1]));

//usando splice
function removeSmallest2(inputArr) {
    if (inputArr.length === 0) return [];
    const min = inputArr.reduce((acc,cur) => {
        return acc>cur ? acc = cur: acc;
    })

    const indexOfMin = inputArr.indexOf(min);
    arr = [...inputArr];
    arr.splice(indexOfMin,1);
    return arr;
}

console.log(removeSmallest2([2,2,1,2,1]));

//usando Math.min e filter
function removeSmallest3(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

const removeSmallest4 = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));