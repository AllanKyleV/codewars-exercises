function findOutlier(integers) {
    let even = [];
    let odd = [];

    for (let n of integers) {
        if (n % 2 === 0) even.push(n);
        else odd.push(n);
    }
    
    return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160

// Pseducode:
//  Goal: find the 'outlier', return the single diffent interger from the array. For example, if there is one odd number from the array and the rest are even, return that odd number, and vice versa.
//  separate odd and even number, if odd numbers length is less than even number, return that even number, and vice versa.