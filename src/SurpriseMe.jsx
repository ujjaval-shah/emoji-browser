import emojiInCategoty from './data/emojisInCategory.json'
import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

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

class SurpriseMe extends Component {

    componentDidMount() {

        const emojiObj = random_emoji(emojiInCategoty)

        console.log(emojiObj)

        this.props.history.push({
            pathname: `${emojiObj.url}`
        })

    }

    render() {
        return (
            <Segment vertical className="stripe">
                <Container text>
                </Container>
            </Segment>
        );
    }
}

export default SurpriseMe;
