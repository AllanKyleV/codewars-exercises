function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    let x = 0;
    let y = 0;

    for (let dir of walk) {
        if (dir === 'n') y++;
        if (dir === 's') y--;
        if (dir === 'e') x++;
        if (dir === 'w') x--;
    }

    return x === 0 && y === 0;
}

console.log(isValidWalk(['n', 's', 'w', 'e'])); // return false
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // return false
console.log(isValidWalk(['n','n','n','n','n','e','e','e','e','w'])); // true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // return faLse
console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']))

// Pseducode:
//  Goal:   return true if the person walks 10 mins on time, else return false less than or more than 10 mins.
// Assumes that 1 block takes 1 minute to walk.
// Count how many times the person walks and change direction 1mins per 1block, if the person walks back (eg. n to s) (decrement count), else (increment). Return true if count walks is equal to 10, else, return false.