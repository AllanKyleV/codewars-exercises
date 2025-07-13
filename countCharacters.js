function count(string) {
    let obj = {};
    for (let char of string) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

console.log(count("aba"));