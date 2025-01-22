// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    return s.split(' ').reduce((acc,cur)=>{if (acc > cur.length) acc = cur.length}, s[0].length);
}

let string = "bitcoin take over the world maybe who knows perhaps";

console.log(findShort(string));

