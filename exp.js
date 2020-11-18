// const emojiDetails = require('./src/data/emojiDetailsImages-4.json')
const emojiInCategoty = require('./src/data/emojisInCategory.json')

// const catOptions = emojiInCategoty.catEmojiList.map((item, index) => ({ value: index, label: item.category }))
// console.log(catOptions)

console.log(random_emoji(emojiInCategoty))

// console.log(emojiDetails.emojiDetailList[0].shortcodes[0].code.slice(1, -1))

// const options = emojiDetails.emojiDetailList.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))

// const nav = ['home', 'categories', 'surprise me']

// A function to get a random item from a given list
function random_item(items) {
    // console.log(items)
    return items[Math.floor(Math.random() * items.length)];
}

// A function to get a random emoji, given json_data: emojiInCategory
function random_emoji(json_data) {
    const catObj = random_item(json_data.catEmojiList)
    // console.log(catObj.category)
    const emObj = random_item(catObj.emojiList)
    // console.log(emObj)
    return (emObj)
}
