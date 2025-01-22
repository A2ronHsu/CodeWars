//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (str='') {
   let numberstr = '012345689';
   
   let input = str;
   console.log(input)
   let i = str.length-1;
   while(numberstr.includes(input[i]) && i > -1){
      i--;
   }
   
   let stringPart= input.slice(0,i+1);
   let numberPart = input.slice(i+1);

   if(numberPart[0] === '0'){
      numberPart = String(10**numberPart.length+Number(numberPart)+1).slice(1)
   }else{
      numberPart = String(10**numberPart.length+Number(numberPart)+1-10**numberPart.length)
   }

   
   
   return stringPart+numberPart

}

console.log( incrementString('f001oo999'))