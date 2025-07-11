function high(x) {
    const letters = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };

    
    for (let word of x.split(' ')) {
        let count = 0;

        for (let letter of word) {
            count += letters[letter];
        }
        return count;
    }
}

// Pseducode: 
//  Goal: return the highest scoring word as a string.
//  Loop through the string, count the total of the word in accordace to the value of each letter in the alphabet. (eg. a = 1, b = 2). Sum and return the word that has the hight total.

console.log(high('man i need a taxi up to ubud')); // taxi.