//https://www.codewars.com/kata/597e31b6829d0b45f2000011/train/javascript

var finalDestination = function(currentPos, directions) {
   //locals are a 9x5 matrix
   var locales = [
     ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
     [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
     [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
     [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
     [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
     [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
     [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
     [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
     [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
   ];
   //function to search the current position
   const currentPosRowCol = (currentPos)=>{
      let currentPosRow=-1;
      let currentPosCol=-1;
      for( let row = 0; row < locales.length; row++){
         let positionFound = false
         for(let col = 0; col < locales[row].length; col++){
            positionFound = locales[row][col] === currentPos;
            if (positionFound){
               currentPosRow = row;
               currentPosCol = col;
               break;
            }
         }
         if(positionFound) return [currentPosRow, currentPosCol]; 
      }
      throw new Error( 'Current position does not exist');
   }

   const parseDirection = (directions='') => {
      const cardinal = directions[0];
      const distance = Number(directions.slice(1));
      let futurePosRow;
      let futurePosCol;
      const direction = {
         N : [futurePosRow,futurePosCol] = [-distance, 0],
         S : [futurePosRow,futurePosCol] = [+distance, 0],
         W : [futurePosRow,futurePosCol] = [0, -distance],
         E : [futurePosRow,futurePosCol] = [0, +distance]
      }
      return direction[cardinal];
   }

   const [currentPosRow, currentPosCol] = currentPosRowCol(currentPos);
   const directionArr = directions.split(' ');
   let [movedX, movedY] = [0, 0]
   let [finalPosRow, finalPosCol ] = [currentPosRow + movedX, currentPosCol + movedY];

   for ( let move of directionArr){
      const [moveX, moveY ]= parseDirection(move);
      movedX+= moveX;
      movedY+= moveY;
      [finalPosRow, finalPosCol ] = [currentPosRow + movedX, currentPosCol + movedY];
      if(finalPosRow<0) return "The Wall blocks your way";
      if(finalPosCol>4 || finalPosRow > 8 || finalPosCol < 0) return "You do not have a ship to cross this sea."
   }



   return locales[finalPosRow][finalPosCol];
   
}

 console.log(finalDestination("King's Landing", "S2 E2"));