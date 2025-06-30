function isMerge(s, part1, part2) {
    const sum = part1.length + part2.length;
    for (let char of s) {
        if (part1.includes(char)) {
            let index = part1.indexOf(char);
            part1 = part1.slice(0, index) + part1.slice(index + 1);
        } else if (part2.includes(char)) {
            let index = part2.indexOf(char);
            part2 = part2.slice(0, index) + part2.slice(index + 1);
        } else {
            return false;
        }
    }

    if (part1.length === 0 && part2.length === 0 && s.length === sum) return true;
    return false;
}

const s = 'codewars';
const part1 = 'cdw';
const part2 = 'oears';
console.log(isMerge(s, part1, part2));
console.log(isMerge('codewars', 'code', 'code'));
console.log(isMerge('codewars', 'code', 'wasr'));

// Solution 2: 


// Link: https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

// My first Solution, which I completely misunderstood the instruction.
// function isMerge(s, part1, part2) {
//     let result = [];
//     let arr1 = part1.split('');
//     let arr2 = part2.split('');

//     for (let i = 0; i < part1.length + part2.length; i++) {
//         if (i % 2 === 0 && arr1.length) {
//             result.push(arr1.splice(0, 1)[0]);
//         } else if (arr2.length) {
//             result.push(arr2.splice(0, 1)[0]);
//         };
//     }
    
//     if (s === result.join('')) return true;
//     return false;
// }

// How did I do it?
//      With ai of course... Lol.
// Here's my presducode: 
//  Goal: return true if the merged result (alternately) of both part1 and part2 is equals to 's'. Else return false.
//  1: sum the total length of both parts, this determines on how many times we are going to loop the 2 strings. 
// Merge the strings alternately. Create an empty array that will serve as a storage of each character to store alternately. To merge alternately, call both parts inside the loop of the sum of two parts. Fisrt is the part1 (convert into array), if 'i' is even number, and it is a part1 then push the spliced character in the index of one. Same condition with part 2. Loop until the summed parts is 0.
// When both parts in merged in the result array. If the result array (join('')) is equal to 's', retrun true, else return false.
// I'm trying myself not to be reliant on ai though, although it helps when I have lots of questions :).