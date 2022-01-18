const isPalindrome = (str) => {
    const reverse = str.split('').reduce((rev,char) => char + rev, '');
    return reverse === str;
}

const string = process.argv[2];
console.log('is Palindrome ? ', isPalindrome(string));