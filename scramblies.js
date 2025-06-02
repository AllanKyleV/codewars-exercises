function scramble(str1, str2) {
    const arr1 = str1.split('');

    for (let char of str2) {
        if (!arr1.includes(char)) {
            return false;
        }
    } return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
console.log(scramble('scriptjavx', 'javascript'))

// Pseducode:
// return true if the portion of str1 can be rearrange as str2, else return false
// if char in str1 includes all item/char in str2, return true, else false
