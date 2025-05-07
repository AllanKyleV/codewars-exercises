function rot13(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    let splitArr = str.split('');

    for (let i = 0; i < splitArr; i++) {
        if (alphabet.includes(splitArr[i]));
            result.push('');
    }
    return result;
}

console.log(rot13('EBG13 rknzcyr'));

//Split the string, loop though each item, create an alphabet library a-z, match the item to the item on the library, if matched, get the index, then add 13 to that index and get the value (ex. 'a' => a = 0 + 13 = 13th index whice is 'n'). (so, how do you do that???).

// UNDONE!!!