function generateHashtag(str) {
    if (!str || str.trim() === '') return false;

    function toTitleCase(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    let words = str.replace(/[\t\n\r]/g, '').replace(/\s+/g, ' ').trim().split(' ');
    let toTitleCaseWords = words.map(toTitleCase);

    let result = `#${toTitleCaseWords.join('')}`;
    return result.length > 140 ? false : result;
}

console.log(generateHashtag('the quIck browN foX Jumps over tHe dOg'))
console.log(generateHashtag("    Hello     World   " ))
console.log(generateHashtag())