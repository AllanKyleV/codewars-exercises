String.prototype.camelCase = function() {
    let arr = this.split(' ');
    let result = [];

    for (let char of arr) {
        let word = [];

        for (let letter of char) {
            if (letter === char[0]) {
                word.push(letter.toUpperCase());
            } else {
                word.push(letter.toLowerCase());
            }
        }

        result.push(word.join(''));
    }
    return result.join('');
}

'hello case'.camelCase();

// Pseducode:
//  Goal: convert strings into Camel Case (the first letter of each word is capitalized).