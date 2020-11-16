import React, { Component } from 'react';
import * as emojiDetails from './data/emojiDetailsImages-3.json';
import Select from "react-select";
import { Container, Divider, Header, Segment } from 'semantic-ui-react';
import { FixedSizeList as List } from "react-window";


let emojiData = []
let options = []
const height = 35;

class MenuList extends Component {
    render() {
        const { options, children, maxHeight, getValue } = this.props;
        const [value] = getValue();
        const initialOffset = options.indexOf(value) * height;

        return (
            <List
                height={maxHeight}
                itemCount={children.length}
                itemSize={height}
                initialScrollOffset={initialOffset}
            >
                {({ index, style }) => <div style={style}>{children[index]}</div>}
            </List>
        );
    }
}

class ESearch extends Component {

    componentWillMount() {
        emojiData = emojiDetails.emojiDetailList
        options = emojiData.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))
    }

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption, emojiObj: emojiData[selectedOption.value] },
            () => console.log(this.state.emojiObj)
        );

        let emojiObj = emojiData[selectedOption.value]

        this.props.history.push({
            pathname: `/${emojiObj.id}`
        })

    };

    render() {

        const { selectedOption } = this.state;

        return (
            <Segment vertical className="stripe">
                <Container text>

                    <Header as='h2' textAlign='left' color='blue'> Search Emoji by Name... </Header>

                    <Divider hidden></Divider>

                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        components={{ MenuList }}
                    />
                </Container>
            </Segment>
        );
    }
}

export default ESearch;