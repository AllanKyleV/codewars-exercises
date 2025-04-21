function alphabetPosition(text) {
    const result = text.match(/[a-zA-Z]/g);
    let newtext = [];

    for (let char of result) {
        char = char.toLowerCase();

        if (char == 'a') {
            newtext.push(1);
        } else if (char == 'b') {
            newtext.push(2);
        } else if (char == 'c') {
            newtext.push(3);
        } else if (char == 'd') {
            newtext.push(4);
        } else if (char == 'e') {
            newtext.push(5);
        } else if (char == 'f') {
            newtext.push(6);
        } else if (char == 'g') {
            newtext.push(7);
        } else if (char == 'h') {
            newtext.push(8);
        } else if (char == 'i') {
            newtext.push(9);
        } else if (char == 'j') {
            newtext.push(10);
        } else if (char == 'k') {
            newtext.push(11);
        } else if (char == 'l') {
            newtext.push(12);
        } else if (char == 'm') {
            newtext.push(13);
        } else if (char == 'n') {
            newtext.push(14);
        } else if (char == 'o') {
            newtext.push(15);
        } else if (char == 'p') {
            newtext.push(16);
        } else if (char == 'q') {
            newtext.push(17);
        } else if (char == 'r') {
            newtext.push(18);
        } else if (char == 's') {
            newtext.push(19);
        } else if (char == 't') {
            newtext.push(20);
        } else if (char == 'u') {
            newtext.push(21);
        } else if (char == 'v') {
            newtext.push(22);
        } else if (char == 'w') {
            newtext.push(23);
        } else if (char == 'x') {
            newtext.push(24);
        } else if (char == 'y') {
            newtext.push(25);
        } else if (char == 'z') {
            newtext.push(26);
        }
    }

    return newtext.join();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
