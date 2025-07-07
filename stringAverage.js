function averageString(str) {
    const strNum = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
    };

    let num = 0;

    for (let item of str) {
        num += strNum[item];
    }

    let ave =  Math.round(num / str.length);
    return strNum[ave];
}

const arr = ['two', 'three', 'five'];
console.log(averageString(arr)); // Should return 'three'

// Pseducode:
//  Goal: Get the average of an array of numbers in strings.
// Convert each string to their equivalent numbers and return their average (ind string).
