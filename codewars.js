function pigIt(str) {
    let words = str.split(' ');

    let b = '';

    for (let word of words) {
        if (/^[a-zA-Z]+$/.test(word)) {
            let a = '';
            a += word.slice(1);
            b += a += word[0] += 'ay ';
        } else {
            b += word;
        }
    }

    return b.trim();
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !

// Pseducode:
//      Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Split each word of string, loop word, remove the first index put it in the end and add 'ay'.