// Frequency Counter Method

function areThereDuplicates(...params){
    if(params.length < 2)
        return false;
    
    let paramsFrequency = {};

    for(let val of params)
        paramsFrequency[val] ? paramsFrequency[val] += 1 : paramsFrequency[val] = 1;
    
    for(let key in paramsFrequency) {
        if(paramsFrequency[key] != 1)
            return true;
    }
    return false;
}

// Multiple Pointer Method

// function areThereDuplicates(...params) {
//     params.sort();

//     let start = 0;
//     let next = 1;

//     console.log(params)
//     while (next < params.length) {
//         if(params[start] === params[next])
//             return true;
//         start++;
//         next++;
//     }
//     return false;
// }

// One Liner Solution
// function areThereDuplicates(...params) {
//     return new Set(params).size !== params.length;

// }



console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 