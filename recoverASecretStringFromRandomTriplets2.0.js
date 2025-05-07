let recoverSecret = function(triplets) {
    let arrays = {
        index0: [],
        index1: [],
        index2: []
    }
    for (let arr of triplets) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) === 0) {
                arrays.index0.unshift(arr[i]);
            } else if (arr.indexOf(arr[i]) === 1) {
                arrays.index1.unshift(arr[i]);
            } else if (arr.indexOf(arr[i]) === 2) {
                arrays.index2.unshift(arr[i]);
            }
        }
    }

    let grouped = {
        group1: [],
        group2: [],
        group3: []
    }

    for (let key in arrays) {
        for (let item of arrays[key]) {
            const count = arrays[key].filter(el => el === item).length;
            
            if (arrays[key].indexOf(arrays[key][item] === 0)) {
                if (!grouped.group1.includes(arrays[key][item])) {
                    if (count === 3) {
                        grouped.group1.push(item);
                    }
                }
            }
        }
    }
    return grouped;
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

/* Reverse it, loop trough array, if item appears
  3 times = end
  2 times = start
  1 time = middle

  if index0, index1, index2 does not include the item push it!
*/