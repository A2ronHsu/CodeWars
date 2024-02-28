// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
    customers.reverse();
    let arr = Array(n).fill(0);
    let time = 0;
    let control = 0;
    
    while(customers.length > 0 || control > 0 ){
        arr.forEach((elem, i, arr) => {
            if( arr[i] === 0 && customers[0] != null ) arr[i] = customers.pop();
        });
        console.log(arr, time);
        
        arr.forEach((elem, i, arr) => {
            if(arr[i]>0)arr[i]--;
        });
        
        
        time++;
        control = arr.reduce((a,b)=> a+b);

    }
    return time;
}








function queueTime2(customers, n) {
    let till = Array(n).fill(0);
    let time = 0;
    let control = 0;
    for (let q =0 ; q < customers.length || control > 0;){
        till.forEach((elem,i,till)=> {
            if(elem === 0 && customers[q] != null) {
                till[i] = customers[q];
                q++;
            }
        })
        
        till.forEach((elem, i, till)=>{
            if( till[i]>0){
                till[i]--;
            }
        })
        time++;
        control = till.reduce((a,b)=>a+b);
    }
    return time;
}

//resoluções
//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/solutions/javascript





let arr = [1,2,3,4,5];
console.log(queueTime2(arr, 100))