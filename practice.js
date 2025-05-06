// Create a pyramid
function createPyramid(item, num) {
    let times = '';
    for (let i = 0; i < num; i++) {
        times += item;
        console.log(times);
    }
}
// createPyramid('*', 5);

// Sort array to asscending order
function sortArray(arr) {
    let sorted = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum =  arr[i];
        let nextNum = arr[i + 1];
        if (currNum < nextNum) {
            currNum = currNum;
        } else {
            currNum = nextNum;
        }
        sorted.push(currNum);
    }
    return sorted;
}
console.log(sortArray([5, 3, 2, 1, 4]));
