// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function createCar(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }
    return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);
console.log(myCar);
export {};