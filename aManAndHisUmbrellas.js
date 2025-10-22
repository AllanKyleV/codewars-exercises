function minUmbrellas(weather) {     
    let count = 0;
    let umbrella = 'at work' // Umbrella's location

    for (let i = 0; i < weather.length; i++) {
        const current = weather[i]; // Person's location

        if ((current === 'rainy' || current ==='thunderstorms') &&
        (umbrella !== 'at home')) {
            count++;
            umbrella = 'at work';
        } else {
            umbrella = 'at home';
        }
    }

    return count;
};

console.log(minUmbrellas(["rainy", "rainy", "clear", "clear", "thunderstorms"]));
// Should return 1
console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));
// 2

// weather = ["rainy", "cloudy", "sunny", "cloudy", "thunderstorms"];
// Goal: Return the number of umbrella/s used according to the given array of weather.
// Logic: A man travels from home to work or vice versa, he'll use and umbrella on travel if the weather is either 'rainy' or 'thunderstorms'. He does not bring the umbrella if the weather is 'clear' and etc, so we need to track also the umbrellas location, if the weather goes bad  as he travel from work and the umbrella is at home, then he'll buy/use another umbrella, making the count of umbrella used as two.
// Pseudocode:
// Start, a function that takes an array of weather. Loop through the array.
// Track both the loaction of the person and the umbrella.
// The person starts at home. If bad weather and the umbrella and the umbrella is not at the current location then count +1.