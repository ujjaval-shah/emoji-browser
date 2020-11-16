// const emojiDetails = require('./src/data/emojiDetailsImages-2.json')
const emojiInCategoty = require('./src/data/emojisInCategory.json')

const catOptions = emojiInCategoty.catEmojiList.map((item, index) => ({ value: index, label: item.category }))
console.log(catOptions)

console.log(emojiInCategoty.catEmojiList[7])

// console.log(emojiDetails.emojiDetailList[0].shortcodes[0].code.slice(1, -1))

// const options = emojiDetails.emojiDetailList.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))

// const nav = ['home', 'categories', 'surprise me']


// -- -- readline -- --

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });