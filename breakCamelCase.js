function solution(str) {
    let result = '';
    for (let char of str) {
        result += (char === char.toUpperCase() ? ` ${char}`: char);

        // if (char === char.toUpperCase()) {
        //     result += ` ${char}`;
        // } else {
        //     result += char;
        // }
    }
    return result;
}

console.log(solution('camelCasing'));

// Pseudocode:
// Goal: Return 'camel Case' from the given string.
// Loop the string, find the character that is uppercase then increament a space before the character.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""