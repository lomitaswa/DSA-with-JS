const reverseInt = (num) => {
    let digit = 0;
    let reverse = 0;

    while(num) {
        digit = num%10;
        reverse = (reverse * 10) + digit;
        num = num/10|0;
    }
    return reverse;
}

const number = process.argv[2];
const revNum = reverseInt(number);
console.log(revNum);