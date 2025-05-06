// Sum of Intervals
function sumIntervals(intervals) {
    let merged = [];
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < sortedIntervals.length; i++) {
        let current = sortedIntervals[i];
        if (merged.length === 0) {
            merged.push(current);
            continue;
        }        

        let last = merged[merged.length - 1];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    let result = 0;
    for (let arr of merged) {
        result += arr[1] - arr[0];
    }

    return result;
}

console.log(sumIntervals( [[1, 4], [7, 10], [3, 5]] ));
console.log(sumIntervals( [[1, 2], [6, 10], [11, 15]] ));
console.log(sumIntervals( [[0, 20], [-100000000, 10], [30, 40]] ));

 // https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// Loop through each array of merges, subract the index[0] from the index[1];