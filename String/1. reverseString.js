const reverse = (str) => {
    return str
        .split('')
        .reverse()
        .join('');
}

const string = process.argv[2];

const reversedString = reverse(string);

console.log(reversedString);