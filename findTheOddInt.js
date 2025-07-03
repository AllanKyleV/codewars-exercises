function findOdd(A) {
    for (let item of A) {
        if (A.filter(i => i === item).length % 2 !== 0) return item;
    }
}

console.log(findOdd([7])); // Should return 7;
console.log(findOdd([1, 1, 2])) // Should return 2;

// Pseducode: 
//      Goal: return the item that appears an odd number of times.
//  Loop the array, filter each item to count how many times it appers in the array. If the count is divisible by two, then it is even, proceed. If the item count is not divisible by two, then it is odd. Return that odd number.