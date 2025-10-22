function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

console.log(seven(times(five())));   //  must return 35
console.log(four(plus(nine())));     //  must return 13
console.log(eight(minus(three())));  //  must return 5
console.log(six(dividedBy(two())));  //  must return 3

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function example(...args) {
    console.log(args);
}

example('a', 'b');