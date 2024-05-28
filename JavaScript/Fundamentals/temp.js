//usando regular expressions
function printerError(s) {
  return `${[...s.matchAll(/[^a-m]/g)].length}/${s.length}`;
}


//usando fors
function printerError2(s = '') {
  const {length} = s;
  let errorsCount = 0;
  const good = 'abcdefghijlm';
  for ( let i=0; i<length;i++){
    if (!good.includes(s[i])){
      errorsCount++;
    }
  }

  return `${errorsCount}/${length}`
}

// console.log(printerError2('aaaxbbbbyyhwawiwjjjwwm'))

console.log(/[a-m]/);