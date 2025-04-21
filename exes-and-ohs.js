function XO(str) {
    let countX = 0;
    let countO = 0;

    for (let char of str.split('')) {
        char.toLowerCase() === 'x' ? countX++ : char.toLowerCase() === 'o' ? countO++ : null;
    } return countX === countO ? true : false;
}
