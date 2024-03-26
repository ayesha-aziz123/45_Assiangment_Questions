"use strict";
////17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guestArray = ["fatima", "suman", "hareem"]; // name array
// can not make dinner
let canNotAttend = "hareem";
// invite new guest
let newGuest = "maryam";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("moiz");
let middleGuest = "aqsa";
let midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleGuest);
guestArray.push("misbha");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nSorry ${removeguest} we can't invite you to dinner!`);
}
;
guestArray.map((item) => console.log(`\n${item} You are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
