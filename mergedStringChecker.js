function isMerge(s, part1, part2) {
    
    // Find the longest string
    const longest = (part1, part2) => {
        if (part1.length > part2.length) return part1;
        return part2;
    }
    const base = longest(part1, part2);

    // Merge
    let result = '';
    for (let i = 0; i < base.length; i++) {
        // Splice index 0 of the part1 then part2
    }

    if (s === result) return true;
    return false;
}

const s = 'codewars';
const part1 = 'cdw';
const part2 = 'oears';
console.log(isMerge(s, part1, part2));

// Goal: Determine if the given string 's', can be formed from the parts of the given strings. return true, if yes, else false.

// The goal is to merge the given parts of string alternately, if the string results the same as 's' then return true, else false.

// Step1: Merge alternately: Using odd and even methods. Part1 should be place on even index while part2 should be place on odd.

// Find the string that has a longest length, that will be the base length of the function.

// Loop each string, create an empty string 'result', if an item does not exist in 'result' add the item to it. Else, skip.