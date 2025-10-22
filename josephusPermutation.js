function josephus(items, k) {
    // create an array of people
    let people = [];
    for (let i = 0; i < items; i++) {
        people.push(i + 1);
    }

    let result = [];
    // Eliminate peolple by k
    function recursive(people, k) {
        
    }

    recursive(people, k)
}

console.log(josephus(7, 3));

// Pseducode: 
// Goal: Return an array of number by the position of the elimination
// items is the number of persons, k is the count for the position of the elimination.


// https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript