export default function add(x: number): any {
   const fn = (y: number) => add(x + y);
   fn.valueOf = () => x;
   return fn;
 }
 
console.log(add(1)(2)(3)(4) as number)

const test : number = add(1)(2);
console.log(test);
