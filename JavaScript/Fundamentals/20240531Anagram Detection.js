//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

var isAnagram1 = function(test, original) {
    let str1 = test.toLowerCase().split('').sort().join();
    let str2 = original.toLowerCase().split('').sort().join();
    return str1 === str2;
};

var isAnagram = function(test, original) {

};

console.log(isAnagram("Buckethead","DeathCubeK"))