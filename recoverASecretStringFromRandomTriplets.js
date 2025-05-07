let recoverSecret = function(triplets) {
    let arrays = {
        index0: [],
        index1: [],
        index2: []
    }
    for (let arr of triplets) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) === 0) {
                if (!arrays.index0.includes(arr[i] || !arrays.index1.includes(arr[i]) || !arrays.index2.includes(arr[i]))) {
                    arrays.index0.push(arr[i]);
                }
            } else if (arr.indexOf(arr[i]) === 1) {
                if (!arrays.index0.includes(arr[i] || !arrays.index1.includes(arr[i]) || !arrays.index2.includes(arr[i]))) {
                    arrays.index1.push(arr[i]);
                }
            } else if (arr.indexOf(arr[i]) === 2) {
                if (!arrays.index0.includes(arr[i] || !arrays.index1.includes(arr[i]) || !arrays.index2.includes(arr[i]))) {
                    arrays.index2.push(arr[i]);
                }
            }
        }
    }
    return arrays;
}

const triplets = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
  ];
console.log(recoverSecret(triplets))

/*
Input: triplets
Output: whatisup

Pseudocode: 
  Loop through the array of arrays. Loop through the array the get the each item. Position the items, 
  RULE: index0, index1, index2
  create a variable that holds the gathered letters, push each item to their corresponding indexes.
*/

// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript