
function duplicateCount(str) {
    let chars = {};
    
    for (let char of str.toLowerCase().split('')) {
        char in chars ? chars[char] += 1 : chars[char] = 1;
    }

    let count = 0;
    for (let key in chars) {
        if (chars[key] > 1) count++;
    }

    return count;
}
console.log(duplicateCount('aabbcde'));
// 2

// Goal: Count the numbers of the duplicate characters.
// Pseducode:
// Convert string to lowercase.
// Split the string into individual characters.
// Loop through string. Create object.
// If the character is already in the objects, add 1 value to it. Else add the character as key with the value of 1.
// loop through the object key, create a variable count with 0 value.
// If the key has a value of greater than one, then add 1 to count.
// return count. Refactor if possible.