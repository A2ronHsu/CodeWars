//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) 

//usando PA
function rowSumOddNumbers(n) {
	const initialOddNPosition = ((n-1)+(n-1)**2)/2+1; //posição do numero impar inicial como pa de razão 1 começando de 1 a n-1 com n-1 elementos e somando 1
    const initialOddN = 2*initialOddNPosition-1;//numero impar na posição n-1 + 1
    const finalOddNPosition = initialOddNPosition+n-1; //posição do numero impar final
    const finalOddN = 2*finalOddNPosition-1;
  
  return (initialOddN+finalOddN)*n/2;
}



//usando loops
function rowSumOddNumbers2(n) {
    let initialOddNPosition=0;
    let arr=[];
    for(i=1; i<n;i++){
        initialOddNPosition+=i;        
    }
    initialOddNPosition++;
    for(i=0;i<n;i++){
        arr.push(2*i+2*initialOddNPosition-1)
    }
    
    return arr.reduce((acc,cur)=> acc+cur);
}



//parece que a soma de uma sequencia de n numeros impares é um resultado conhecido: n**3

function rowSumOddNumbers3(n) {
    return n**3;
}

console.log(rowSumOddNumbers3(42));