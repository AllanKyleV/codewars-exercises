function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.toLowerCase().split('');
    
    for (let letter of alphabet) {
        if (!arr.includes(letter)) return false;
    }
    
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('This is not a pangram'));

// Pseducode
// Goal: return true if the string uses all the letter in the alphabet also called "Pangram". Else, return false.
// Loop the letters a-z in lowercase, if the letter is not included in the string, return false, else true.