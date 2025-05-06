function solution(number){
    let result = 0;

    for (let i = number - 1; i > 0; i--) {
        if(i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    } return result;
}

console.log(solution(10))

/*
    Input: 10;
    Output: 23;
    Goal: List numbers below the given number, find if the number is divisible by 3 or 5, and add that numbers.

    Pseudocode: 
    List numbers below the given number:
        Create an empty array that holds the numbers below that number.
        Create a loop that decrement the number (push the number to the created array) until it's equal to 0.

    find if the number is divisible by 3 or 5, and add that numbers:
        Create a variable, set to 0, Loop through the created array and if the number is divisible by 3 or 5, add that number to the created variable.
    Return the created variable.

    // Refactor it!
*/