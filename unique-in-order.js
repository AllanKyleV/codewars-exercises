var uniqueInOrder = function(iterable){
    let order = [];
    let index = null;

    let sequence = typeof iterable === 'string' ? iterable.split('') : iterable;

    for (let char of sequence) {
        if (char !== index) {
            order.push(char);
            index = char;
        }
    }
    return order;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]));