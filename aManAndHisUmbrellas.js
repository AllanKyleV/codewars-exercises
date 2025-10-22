// weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"];

function minUmbrellas(weather) {
    let count = 0;

    //const umbrella = ['at home', 'at work'];
    let home = 0;
    let work = 0;
s
    for (let i = 0; i < weather.length; i++) {
        const current = weather[i];
        const prev = weather[i - 1];

        if ((current === 'rainy' || current === 'thunderstorms') && 
        !(prev === 'rainy' || prev === 'thunderstorms')) {
            count++;

            if (i % 2 === 0) {
                home++;
            } else {
                work++;
            }
        }
    }

    let result = 0;

    if (work % 2 === 0) {
        result += work / 2;
    } else if (work % 2 !== 0 && work > 2) {
        work - 1;
        result += work / 2 + 1;
    } else if (work === 1) {
        result += 1;
    } else {
        result += 0;
    }

     if (home % 2 === 0) {
        result += home / 2;
    } else if (home % 2 !== 0 && home > 2) {
        home - 1;   ``
        result += home / 2 + 1;
    } else if (home === 1) {
        result += 1;
    } else {
        result += 0;
    }
    
    return result;
};

console.log(minUmbrellas(["clear", "rainy", "clear", "windy", "windy", "windy", "rainy", "sunny", "windy", "sunny"]));
// 1
console.log()

// console.log(minUmbrellas(['rainy', 'rainy', 'clear', 'clear', 'rainy']));

// The code has flaws, issue: Should track where the umbrella is.
// Pseducode, track umbrella, how to do it???
// Example: At home, it's rainy so you used an umbrella, now the umbrella is at work track
//
// umbrella: 1

// console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));
// // 2
// console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]));
// // 0
// console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]));
// // 1
// console.log(minUmbrellas(["clear", "sunny", "clear", "sunny", "thunderstorms", "thunderstorms", "windy", "clear", "rainy", "windy"]));
// // 1
// console.log(minUmbrellas(["clear", "sunny", "rainy", "thunderstorms", "rainy", "clear", "windy", "thunderstorms", "thunderstorms", "clear"]));
// // 1


