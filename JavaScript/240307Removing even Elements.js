//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr, i = 0, result = []){
    if (arr[i] == null) return result;
    if( i%2 == 0){
        result.push(arr[i]);
    }
    return removeEveryOther(arr,i+1,result);
  
}

function removeEveryOther(arr){

    let result = [];
    for(let i = 0; i< arr.length; i++){
        if( i%2 === 0) result.push(arr[i]);
    }
    return result;
}

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }