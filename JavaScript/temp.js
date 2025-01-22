function solution(str, ending){
   const regex = new RegExp(`${ending}\\b`);
   console.log(regex);
   return regex.test(str);
 }

 console.log( solution('abcde', 'cde'))

 //solution
 /*
 function solution(str, ending){
   return str.endWith(ending);
 }
  */