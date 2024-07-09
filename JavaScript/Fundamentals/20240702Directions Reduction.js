//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){
   let directions = {
      "NORTH": "SOUTH",
      "SOUTH": "NORTH", 
      "EAST" : "WEST", 
      "WEST" : "EAST"
   }


   let trajectory = [arr[0]]
   
   for (let i = 1; i < arr.length; i++){
      let lastElem = trajectory[trajectory.length-1];
      let elem = directions[arr[i]];
      console.log(elem, lastElem)
      if(elem == lastElem && lastElem)
         trajectory.pop();
      else{
         trajectory.push(arr[i])
      }
   }
   return trajectory;
 }

 let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
 console.log(dirReduc(arr));
// console.log()