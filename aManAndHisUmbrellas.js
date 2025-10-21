weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"];

function minUmbrellas(weather) {
    let count = 0;

    for (let i = 0; i < weather.length; i++) {
        const current = weather[i];
        const prev = weather[i - 1];

        if ((current === 'rainy' || current === 'thunderstorms') && 
        !(prev === 'rainy' || prev === 'thunderstorms')) {
            count++;
        }
    }

    return count;
};

// The code has flaws, issue: Should track where the umbrella is.

console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));
// 2
console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]));
// 0
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]));
// 1
console.log(minUmbrellas(["clear", "sunny", "clear", "sunny", "thunderstorms", "thunderstorms", "windy", "clear", "rainy", "windy"]));
// 1
console.log(minUmbrellas(["clear", "sunny", "rainy", "thunderstorms", "rainy", "clear", "windy", "thunderstorms", "thunderstorms", "clear"]));
// 1
