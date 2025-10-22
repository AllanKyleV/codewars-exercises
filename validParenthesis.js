// Valid Parentheses

function validParentheses(parens) {
    if (parens.length % 2 !== 0) {
        return false;
    }

    for (let char of parens.split()) {
        if (!('()'.includes(char))) {
            return false;
        }
    }

    

    return true;
}; 

console.log(validParentheses('()')); // true
console.log(validParentheses('(')); // false
console.log(validParentheses('ab')); // false

// Pseducode:
// Goal: Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Input: (); return true, )()return false.