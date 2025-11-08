// Greed is Good
// Instructions: Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
// Rules:
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// Algorithm:
// Get an array
// set score to 0
// Create an empty objects
// Loop through array, if item is not in object, push it, else increment value.
// Loop through keys in object, if key = 1 and value >= 3, key * 1000, let excess = key.value - 3, if excess > 0, score += excess * 100.
// Else if key is = 5 and value >= 3, key * 100, 
// let excess = key.value - 3, if excess > 0, score += exess * 50.
// else if key not 1 or 5 and value >= 3, the score =n key * 100
// return score

// Pseducode:
// START
// CREATE a function score(dice) that ACCEPTS argument dice
// SET obj TO EMPTY objects
// FOR i FROM 0 TO length OF dice -1
//      IF dice[i] in obj THEN
//          obj[dice[i]]++
//      ElSE
//          obj[dice[i]] = 1;
// SET score TO 0
// FOR key in obj
//      IF number(key) === 1 AND obj[key] >= 3 THEN
//          score += key * 1000
//          score += obj[key] - 3 * 100
//      ELSE IF number(key) === 5 AND obj[key] >= 3 THEN
//          score += key * 100
//          score += obj[key] - 3 * 50
//      ELSE IF number(key) === 1 AND number(key) === 5 THEN
//          IF number(key) === 1 THEN
//              score += number(key) * 100
//          ELSE
//              score += nunber(key) * 50
//          ENDIF
//      ELSE IF obj[key] >= 3 THEN
//          score += number(key) * 100
// RETURN score
// END

function score(dice) {
    let obj = {};
    for (let i = 0; i < dice.length; i++) {
        if (dice[i] in obj) {
            obj[dice[i]]++;
        } else {
            obj[dice[i]] = 1; 
        }
    }
    let score = 0;
    for (let key in obj) {
        if (Number(key) === 1 && obj[key] >= 3) {
            score += 1000;
            score += (obj[key] - 3) * 100;
        } else if (Number(key) === 5 && obj[key] >= 3) {
            score += 500;
            score += (obj[key] - 3) * 50;
        } else if (Number(key) === 1) {
            score += obj[key] * 100;
        } else if (Number(key) === 5) {
            score += obj[key] * 50;
        } else if (obj[key] >= 3) {
            score += Number(key) * 100;
        }
    }
    return score;
}

console.log(score([5, 1, 3, 4, 1]));