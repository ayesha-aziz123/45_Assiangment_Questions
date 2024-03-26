// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function citycountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = citycountry('lahore', 'pakistan');
let c2 = citycountry('tokyo', 'japan');
let c3 = citycountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
export {};
