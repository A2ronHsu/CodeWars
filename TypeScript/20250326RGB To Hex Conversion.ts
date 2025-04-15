export function rgb(r: number, g: number, b: number): string {
   let result = '';

   for (let color of arguments){
      if (color < 16) result += '0';
      if( color > 255){
         result += 'FF';
      }else if( color < 0){
         result += '0'
      }else{
         result += color.toString(16);
      }
   }
   
   return result.toUpperCase();
}

console.log(rgb(-1,0,15));