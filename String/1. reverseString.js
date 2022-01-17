const reverse = (str) => {
    
    /*
    // Array reverse method
    return str
        .split('')
        .reverse()
        .join('');
    */

    /*
    // Using For-Of Loop
    let reversed = '';

    for (const char of str) {
        reversed = char + reversed;
    }
    return reversed;
    */
   
}

const string = process.argv[2];

const reversedString = reverse(string);

console.log(reversedString);