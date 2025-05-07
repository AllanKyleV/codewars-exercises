function nextBigger(n) {
    const nums = n.toString().split('');
    const sortedNum = nums.join('');
    result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.length === 1 || n === parseInt(sortedNum)) {
            result = -1;
        }
    }
    return result;
}

console.log(nextBigger(21));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(414));
console.log(nextBigger(144));
console.log(nextBigger(22));
console.log(nextBigger(2));

/*
Pseudocode:
    Input: 513S
    Output: 531
    Goal: A function that returns the next bigger number formed by by rearranging its digit.
*/