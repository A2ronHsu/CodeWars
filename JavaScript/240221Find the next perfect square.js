//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square




function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.sqrt(sq) % 1 ===0) return (Math.sqrt(sq)+1)**2
    return -1;
}

console.log(findNextSquare(625));