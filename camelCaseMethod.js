String.prototype.camelCase = function(str) {
    let arr = str.split(' ');
    let result = [];

    for (let char of arr) {
        for (let letter of char) {
            let word = [];
            if (letter === char[0]) {
                word.push(letter.toUpperCase());
            } else {
                word.push(letter);
            }
            result.push(word);
        }
    }
    return result;
}

console.log(String.prototype.camelCase('camel case word'));

// Pseducode:
//  Goal: convert strings into Camel Case (the first letter of each word is capitalized).