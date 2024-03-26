// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruit = ["keivi", "mango", "apples", "berry", "peech"];
if (favorite_fruit.includes("keivi")) {
    console.log("keivi");
}
if (favorite_fruit.includes("mango")) {
    console.log("mango");
}
if (favorite_fruit.includes("apples")) {
    console.log("apples");
}
if (favorite_fruit.includes("berry")) {
    console.log("you really like bananas");
}
if (favorite_fruit.includes("peach")) {
    console.log("you really like bananas!");
}
export {};
