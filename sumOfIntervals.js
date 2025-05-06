// Sum of Intervals
function sumIntervals(intervals) {
    let numbers = [];

    for (let interval of intervals) {
        let count = interval[0];
        while (count < interval[1]) {
            numbers.push(count);
            count++;
        }
    }

    // Sort array of numbers
    let sortedNum = numbers.sort((a,b) => a - b);

    let duplicatedRemoved = [];
    for (let i = 0; i < sortedNum.length; i++) {
        let nextNum = sortedNum[i + 1];
        if (sortedNum[i] !== nextNum) {
            duplicatedRemoved.push(sortedNum[i]);
        }
    }

    return duplicatedRemoved.length;
}

console.log(sumIntervals( [[1, 4], [7, 10], [3, 5]] ));
console.log(sumIntervals( [
    [1, 2],
    [6, 10],
    [11, 15]
 ] ))

 // https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript