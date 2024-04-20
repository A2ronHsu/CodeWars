//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    let length = names.length;
    let obj = {
        0: "no one likes this",
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${length-2} others like this`
    }
    return length < 4 ? obj[length] : obj[4];
}


//outra forma bonita
const likes = names => [
    'no one likes this',
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  ][Math.min(4, names.length)];