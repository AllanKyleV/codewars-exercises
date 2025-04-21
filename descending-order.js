function descendingOrder(n) {
  const descending = [];
  //let curNum = 0;A
  let nStr = n.toString().split();
  let curIndex = 1;

  while (n.toString().length >= 0) {
    for (let item of nStr) {
        if (item >= nStr[curIndex]) {
            return item
        }
        item = curIndex;
        n.toString().slice(-1);
        return descending.push(item);
    }
  }
  return descending;
}

console.log(descendingOrder(42145))

/*
Pseudocode
    split the numbers, identify the higher number push to the created array variable. 
    loop through each item in the array, compare the item in each item in the array, if the current item is higher then stay else move to next item and so on unitl the end of the array, if the current number is higher to all, push to the new array.
 */