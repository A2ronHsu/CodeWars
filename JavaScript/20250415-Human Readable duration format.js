//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
function formatDuration (inputInSeconds) {
   const duration = {
      hours : inputInSeconds > 3600,
      hour : inputInSeconds == 3600,
      minutes: inputInSeconds > 60 && inputInSeconds < 3600,
      minute: inputInSeconds == 60,
      seconds: inputInSeconds < 60,
      second: inputInSeconds == 1
   }

   let seconds = inputInSeconds;
   let result = '';

   if (duration.hours){
      const hours = Math.floor(seconds/3600);
      const seconds = seconds % 3600;
      result = `${hours} hours`;
   }


   return result+seconds;
}

console.log(formatDuration(3601));