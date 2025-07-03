function divisors(integer) {
    let divisor = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divisor.push(i);
        }
    }
    
    return divisor.length === 0 ? `${integer} is prime` : divisor;
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
