/*
*   Write a recursive function called someRecursive which accepts an array and a callback. 
*   The function returns true if a single value in the array returns true when passed to the callback. 
*   Otherwise it returns false.
*
*/ 

const isOdd = val => val % 2 !== 0;

// function someRecursive(arr, cb){
//     let check;
//     if(arr.length === 0)
//         return false;
//     check = cb(arr[0]) || someRecursive(arr.splice(1), cb)
//     return check;
// }

// Optimized
function someRecursive(array, callback) {
    if (array.length === 0) 
        return false;
    if (callback(array[0])) 
        return true;
    return someRecursive(array.slice(1),callback);
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false