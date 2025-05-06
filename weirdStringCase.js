function toWeirdCase(string) {
    let words = string.split(' ');
    let result = [];
    
    for (let word of words) {
        let newWord = [];
        let index = 0;

        for (let char of word) {
            if (index % 2 === 0) {
                newWord.push(char.toUpperCase());
            } else if (index % 2 !== 0) {
                newWord.push(char.toLowerCase());
            } index++; } result.push(newWord.join(''));
    } return result.join(' ');
}

console.log(toWeirdCase("String"))
console.log(toWeirdCase("Weird string case"))

/*
Pseudocode:
    Loop through each char, if char index % 2 === 0 && char[index] !== 'undefined', push to new words to Uppercase. 
    If index % 2 === 0 ||
*/