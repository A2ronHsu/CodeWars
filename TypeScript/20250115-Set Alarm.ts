export function setAlarm(employed: boolean, vacation: boolean) : boolean {
   return employed && !vacation? true : false;
}

console.log( setAlarm(true, false));
console.log( setAlarm(true, true));