// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length)
//         return false;
    
//     let stringFrequencyObj1 = {};
//     let stringFrequencyObj2 = {};

//     for(let char of str1)
//         stringFrequencyObj1[char] = (stringFrequencyObj1[char] || 0) + 1;

//     for(let char of str2)
//         stringFrequencyObj2[char] = (stringFrequencyObj2[char] || 0) + 1;
    
//     for(let key in stringFrequencyObj1) {
//         if(stringFrequencyObj1[key] !== stringFrequencyObj2[key])
//             return false;
//     }
//     return true;
// }

function validAnagram(str1, str2) {
    if(str1.length !== str2.length)
        return false;
    
    let lookup = {};

    for(let char of str1)
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    
    for(let key of str2) {
        if(!lookup[key])
            return false;        
        lookup[key] -= 1;
    }
    return true;
}

console.log("Check for 1 : ", validAnagram('abc', 'acb'));      // Return true
console.log("Check for 2 : ", validAnagram('abbc', 'accb'));    // Return false
console.log("Check for 3 : ", validAnagram('abbce', 'aebcb'));  // Return true
