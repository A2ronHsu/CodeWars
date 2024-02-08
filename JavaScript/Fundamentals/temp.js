let array = [6, NaN , 1, 8, 10];

const invalid = [NaN, null, '', undefined, typeof(array) != 'number'];
    
array.forEach(element => {
    if (typeof(element) != 'number' ) console.log( 0);
    if (invalid.includes(element)) console.log( 0);
}); 

