const reverse = (str) => {  
     // Using For-Of Loop
    let reversed = '';

    for (const char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

const string = process.argv[2];

const reversedString = reverse(string);

console.log(reversedString);

    /*
    
    // Using reduce array helper method
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
    */

    /*
    // Array reverse method
    return str
        .split('')
        .reverse()
        .join('');
    */