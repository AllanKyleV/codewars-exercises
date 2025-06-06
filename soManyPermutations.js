function permutations(str) {
    const arr = str.split('');
    let noDuplicate = [];
    
    // Remove duplicate
    for (let i = 0; i < arr.length; i++) {
        if (!noDuplicate.includes(arr[i])) {
            noDuplicate.push(arr[i]);
        }
    }

    // 
}
console.log(permutations('abbbc'));

// Pseducode
    // Goal: create a permutation of strings (all possible orderings for the given string.)
    // Input: 'ab'
    // Output: ['ab', 'ba']
    // Note:
        // # no duplicate letters

    // Remove duplicates from str,
    // 