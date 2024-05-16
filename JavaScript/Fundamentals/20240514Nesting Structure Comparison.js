//https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
    if(!isArray(this) || !isArray(other) || this.length !== other.length){
        return false;
    }else{
        for ( let i in this){
            this[i].prototype.sameStructureAs(other[i])
        }
    }
    return true
};
