function deleteNth(arr,n){
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    } return count;
}
  
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
  
  // Take an array, and the number (the times of how many an item should repeat at maximum)
  // Create a ne variable that holds the new array
  // Loop through, (loop  for) let num of arr;
  // If arr includes 