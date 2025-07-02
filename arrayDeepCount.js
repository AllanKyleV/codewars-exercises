function deepCount(a) {
    if (a.length === 0) return 0;

    let count = 0;
    for (let item of a) {
        if (Array.isArray(item)) {  
            count += deepCount(item);
        }
        count++;
    }
    return count;
}

console.log(deepCount([[[]]]));
console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount([1, 2, [3, 4, [5]]]));

// Pseducode:
//  Goal: return the number of all elements inclucding nested array within the array.
// Input:   [], return 0
//          [1, 2, 3], return 3
//          [1, 2, [3, 4, [5]]], return 7
// Write conditionalas for: return 0 if the array is empty, count and retrun the number of elements within array including the nested array. If the item is an array, add the count of the inner elements (by recursion);