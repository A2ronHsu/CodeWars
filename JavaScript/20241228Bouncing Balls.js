function bouncingBall(h,  bounce,  window) {
   const validH = h > 0;
   const validBounce = bounce > 0 && bounce < 1;
   const validWindow = window < h;
   let count = -1;
   if (validH && validBounce && validWindow) {
      while (h > window){
         count += 2;
         h = h*bounce;
      }
      return count;
   }

   return -1;
}

console.log(bouncingBall(60.0, 0.66, 1.5));