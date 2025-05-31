// https://www.codewars.com/kata/555624b601231dc7a400017a/train/typescript

class Node {
   data: any;
   next: Node | null;
   constructor(data: any, previous: Node | null = null) {
      this.data = data;
      this.next = data;
   }
}



export function josephusSurvivor(n: number, k: number) {
   let initialNode = new Node(1);
   let current = initialNode;

   for (let i = 2; i < n; i++) {
      current.next = new Node(i);
      current = current.next;
   }
   current.next = new Node(n);
   current = current.next;
   current.next = initialNode;

   // console.log(current.data)

   while (current.data !== current.next!.data) {
      for (let i = 0; i < k; i++) {
         console.log(current.data, current.next?.data);
         if (i == k - 1) {
            console.log("deleted",current.next?.data);
            current.next = current.next!.next;
         }else{

            current = current.next!;
         }
      }
   }

   return current.data;


}
console.log('test');
console.log(josephusSurvivor(11,19))
// console.log(josephusSurvivor(5, 2));