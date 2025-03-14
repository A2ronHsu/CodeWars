const myDate = new Date();
let object = myDate;
let object2 = new object(); 
do {
  object2 = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
