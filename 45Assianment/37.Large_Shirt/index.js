// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
makeShirt();
makeShirt('medium');
// different message 
makeShirt('small', 'need a big shirt to wear');
export {};
