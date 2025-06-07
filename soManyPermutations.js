function permutations(str) {
    const arr = str.split('');

    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    return result;
}
console.log(permutations('abc'));

// Pseducode
    // Goal: create a permutation of strings (all possible orderings for the given string.)
    // Input: 'ab'
    // Output: ['ab', 'ba']
    // Note:
        // # no duplicate array

    // Loop str to select each item, pair each item all 
    // select one
    
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
