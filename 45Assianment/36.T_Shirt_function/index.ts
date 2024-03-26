// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt(size: string, text: string) {
    console.log(`\n you selected ${size} shirt with ${text} print on shirt`)

};
make_shirt('large', '"sky is the limited"');
make_shirt('small', '"whole world"');

