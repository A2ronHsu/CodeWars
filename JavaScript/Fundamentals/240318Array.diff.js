//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a = [], b = []) {
    return a.filter(elem => !b.includes(elem))
}