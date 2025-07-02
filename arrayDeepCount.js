function deepCount(a) {
    // base case
    if (a.length <= 1) return;
    console.log(a)
    return a + deepCount(a - 1);
}

console.log(deepCount([[[]]])); // Count nested array, should return 3