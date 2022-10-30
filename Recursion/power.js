
function power(base, exp){
    if(exp === 0)
        return 1;

    return base * power(base, --exp);
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));
console.log(power(2,5));
