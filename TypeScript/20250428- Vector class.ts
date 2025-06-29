export class Vector {
   constructor( private components: number[]) {
   }
   
   isDifflength(vector: Vector):void{
      const test = vector.components.length === this.components.length;
      if(!test) throw new Error("error");
   }

   add(vector:Vector):Vector {
      this.isDifflength(vector);
      return new Vector( this.components.map((value, index) => value + vector.components[index]));
   };

   subtract(vector:Vector):Vector{
      this.isDifflength(vector);
      return new Vector(this.components.map((value, index)=>value - vector.components[index]));
   }

   dot(vector:Vector):number{
      this.isDifflength(vector);
      return this.components.reduce((previous,current,index)=>previous += current*vector.components[index],0);
   }

   norm():number{
      return Math.sqrt(this.components.reduce((previous,current)=>previous += current**2,0));
   }

   toString():string{
      return `(${this.components.toString()})`;
   }

   equals(vector:Vector):boolean{
      return this.toString() === vector.toString();
   }
 };

 let a = new Vector([1, 2, 3]);
 let b = new Vector([3, 4, 5]);
console.log(a.dot(b));