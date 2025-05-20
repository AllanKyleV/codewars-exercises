function pigIt(str) {
    const arr = str.split('');
    for (let word of arr) {
        word.slice(-1);
        console.log(word);
    }
}
console.log(pigIt(('Pig latin is cool')));
pigIt('Hello world !');

/*Psedocode
    Input: Pig
    Output: igPay
    Goal: Move 1st letter of each word to end then add 'ay'.

    Split each word, loop through, split each letter, remove first letter, put it in the end, add 'ay'.
*/

// Unfinished