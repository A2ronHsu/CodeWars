//https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

function isArray(array){
    return Array.isArray(array);
}

function isEqual(array1, array2){
    if ((isArray(array1) || isArray(array2)) && (array1.length !== array2.length) ) return false ;
    return true
    

}

Array.prototype.sameStructureAs = function (other) {
    if( isArray(this) && isArray(other)) return compareFn(this, other);
    return false;


};

function compareFn(array1,array2){
    let equal = isEqual(array1,array2);
    for( let i = 0 ; i < array1.length && equal && isArray(array1) && isArray(array2); i++){
        equal = compareFn(array1[i],array2[i])
    }
    return equal;
}

const array1 = [ [ [ 2], [ 2] ] ] ;
const array2 = [ [ [1 ], [ 1] ] ] ;


// console.log(isEqual(`${array1[0]}`,`${array2[0]}`))




//uma forma melhor de fazer talve seja:
Array.prototype.sameStructureAs2 = function (other) {
    if (!Array.isArray(other) || this.length != other.length)
      return false;

    for(var i = 0; i < this.length; ++i) {
      if (Array.isArray(this[i])) {
        if (!this[i].sameStructureAs(other[i])) {
          return false;
        }
      } else if (Array.isArray(other[i])) {
        return false;
      }
    }
    
    return true;
};

console.log (array1.sameStructureAs2(array2))