function moveZeros(arr) {
    let zeros = [];
    let otherItem = [];

    for (let item of arr) {
        item === 0 ? zeros.push(item) : otherItem.push(item);
    }

    return otherItem.concat(zeros);
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// returns[false,1,1,2,1,3,"a",0,0]

// Goal: Move all zeros to the end.
// Pseudocode:
// Start, a function that takes and array
// create a var b where we collect the item that is not zero, then a for a collection of 0s.
// Loop through the array, If the item is equal to 0 push it to var, else b.
// return the combined items, with zeros at the end.
// Refactor, end.