function isValidWalk(walk) {
    let count = 0;

    for (let i = 0; i < walk.length; i++) {
        if (i === 0) {
            count++;
        } else if (walk[i] === walk[i - 1]) {
            count--;
        } else {
            count++;
        }
    }
    
    if (count === 10) return true;
    return false;
}
//let curr = walk[i - 1];

console.log(isValidWalk(['n', 's', 'w', 'e'])); // return false
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // return true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // return fasle

// Pseducode:
//  Goal:   return true if the person walks 10 mins on time, else return false less than or more than 10 mins.
// Assumes that 1 block takes 1 minute to walk.
// Count how many times the person walks and change direction 1mins per 1block, if the person walks to the same direction, it means he stays in the same spot then (decrement count), else (increment). Return true if count walks is equal to 10, else, return false.