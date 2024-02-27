//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    if (array.length === 0) return array;
    return array.map(elem => -1*elem);
}

//usando um operador de curto circuito
function invert(array) {
    return array.map(n => n && -n) // se n for um thruty então devolve -n, caso contrario, devolve n
}