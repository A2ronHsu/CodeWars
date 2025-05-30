class Node {
   data: any;
   next: Node | null;
   previous: Node | null;
   constructor(data: any, previous: Node | null = null, next: Node | null = null) {
      this.data = data;
      this.previous = previous;
      this.next = next;
   }
}

class DoubleLinkList {
   size:number;
   head:Node|null;
   tail:Node|null;

   constructor(){
      this.size = 0;
      this.head = null;
      this.tail = null;
   }

   add(data:any){
      if (!this.head) {
         this.head = new Node(data)
         this.tail = this.head;
         this.head.next = this.tail;
         this.head.previous = this.tail;
         return this.head;
      }

      return this.tail!.previous!.next = new Node(data,this.tail?.previous, this.tail);

   }

}



export function josephusSurvivor(n: number, k: number) {
   const list = new DoubleLinkList();
   for (let i = 1; i <= n; i++){
      list.add(i);
      console.log(list);
   }
   
   return list
}
console.log('test')
console.log(josephusSurvivor(5, 2));
console.log('test')
console.log(josephusSurvivor(7, 3)); 