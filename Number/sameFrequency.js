function sameFrequency(num1, num2) {
    let snum1 = num1+"";
    let snum2 = num2+"";

    if(snum1.length !== snum2.length)
        return false;
    
    let sNum1Obj = {};

    for(let num of snum1)
        sNum1Obj[num] ? sNum1Obj[num] += 1 : sNum1Obj[num] = 1;
    
    for(let num of snum2) {
        if(!sNum1Obj[num])
            return false;
        else
            sNum1Obj[num] -= 1;
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false