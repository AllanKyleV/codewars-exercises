function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) {
        return -1;
    }

    let nextSquare = sq + 1;
    while (!Number.isInteger(Math.sqrt(nextSquare))) {
        nextSquare++;
    }
    return nextSquare;
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))