function getCount(str) {
    let result = 0;
    for (let char of str.toLowerCase().split('')) {
        if ('aeiou'.split('').includes(char)) {
            result++;
        }
    } return result;
}
console.log(getCount('abracadabra'))