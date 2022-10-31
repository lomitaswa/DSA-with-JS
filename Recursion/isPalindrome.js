//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

// Using Helper Method Recursion design pattern
// function isPalindrome(str){
//     let revStr = '';

//     function helper(help) {
//         if(help.length === 0)
//             return '';
//         revStr += help[help.length-1];
//         return helper(help.slice(0, help.length-1));
//     }

//     helper(str);

//     if(revStr === str)
//         return true;
//     return false;
// }

// Pure recursion method
function isPalindrome(str){
    if(str.length === 1) 
        return true;
    if(str.length === 2) 
        return str[0] === str[1];
    if(str[0] === str.slice(-1)) 
        return isPalindrome(str.slice(1,-1))
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false