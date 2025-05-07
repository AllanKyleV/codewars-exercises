function nextBigger(n) {
    const fixedNums = n.toString().split('').reverse();
    const nums = n.toString().split('').reverse();
    let ab = nums.splice(0, 2)
    let result = [];
    
    if (ab[0] < ab[1]) {
        result.unshift(ab[0]);
        result.unshift(ab[1]);
        for (let num of nums) {
            result.unshift(num);
        }
    } else if (ab[0] > ab[1]) {
        result.unshift(ab[1]);
        result.unshift(ab[0]);
        for (let num of nums) {
            result.unshift(num);
        }
    } else if (ab[0] === ab[1]) {
        result.unshift(fixedNums[1]);
        result.unshift(fixedNums[2]);
        result.unshift(fixedNums[0]);
    } else if (n.toString.length === 1) {
        result.push(-1);
    }
    return parseInt(result.join(''));
}

console.log(nextBigger(12));
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

    n to string, split n, and reverse n.
    loop through, if index0 is < index1, unshift index1 else, index0. (create an empty array variable). else if index 0 === index1, index1[+1].
*/