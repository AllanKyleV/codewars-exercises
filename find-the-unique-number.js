function findUniq(arr) {
    let curr = 0;  
    
    for (let num of arr) {
        let next = arr[curr - 1];
        let otherNext = arr[curr + 1];

        if (num !== next  && num !== otherNext) {
            return otherNext;
        } curr++;
    }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

// Loop through an array, if item is equal to the next number, and equal to the next number but not equal to the last number, then ret  urn the last number.

// Return num is num is not equal to the next num or the prev num