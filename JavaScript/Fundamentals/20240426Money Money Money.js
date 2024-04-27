//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
    let present = principal;
    let i = 0;
    for( i ; present < desired; i++){
        present += (present-present*tax)*(interest);
    }
    return i;
}

function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
      Math.log(desired / principal) / 
      Math.log(1 + interest * (1 - tax))
    );
  }

console.log(calculateYears2(1000,0.05,0.18,1100));