const maxSequence = function(arr){
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        if (currentSum > maxSum) maxSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

console.log(maxSequence([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]))
// intialize maxSum and currentSum to zeros
// List all posible contingouos chunks
// loop through array, 