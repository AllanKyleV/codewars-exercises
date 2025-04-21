function longest(s1, s2) {
    const combine = (s1 + s2).split('');
    let current = 0;
    let once;

    for (let c of combine) {
        if (c !== current) {
            once.push(c);
        } else {
            c = current;
        }
    }

    return once;
}

const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
console.log(longest(a, b))

// Goal return a new string alphabetically
// Combine the two strings and split then loop through exach array
// if the char in array is not equal to current array then push to newCreated variable, else char is equal to the next array.
