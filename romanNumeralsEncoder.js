function solution(number){
    let roman = [];
    
}

console.log(solution(3))
console.log(solution(1000))
console.log(solution(1666))

/*
    Input: 1666
    Output: MDCLXVI
    Goal: Return a string containing the Roman Numeral representation of that integer

    Pseudocode:
        determine the length of the number, if number.length < 5, 
*/


/* Scrap: 
     i. Express each digit separately starting with the leftmost digit and skipping any digit with a value of zero:
        Convert the number to string, split the numbers to individual strings and covert each back to number.
        Create an array that holds romanNumerals, If the num is < 5, for (let i = num; i > 0; i--) {}, ...
*/