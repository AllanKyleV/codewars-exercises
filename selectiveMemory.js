function select(memory) {
    let result = [];

    let arr = memory.split(', ')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === '!') {
            arr.splice(arr[i], [i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result.join(', ');
}

console.log(select("Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln")); // "Albert Einstein, Abraham Lincoln"
console.log(select("Bryan Joubert"));
console.log(select('!a, !b, c, d, !e'));

// Pseducode:
// Goal: Remove names from the given string that has an occurence of '!' before their name. Also, remove the name after the of name with the occurence of '!'.

// https://www.codewars.com/kata/58bee820e9f98b215200007c/train/javascript