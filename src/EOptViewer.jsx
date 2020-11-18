import React, { Component } from 'react';
import * as emojiDetails from './data/emojiDetailsImages-4.json';
import Select from "react-select";
import EDetails from './EDetails'
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


class EViewer extends Component {

    componentWillMount() {
        emojiData = emojiDetails.emojiDetailList
        options = emojiData.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))
    }

    state = {
        selectedOption: null,
        emojiObj: null,
        count: 0
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption, emojiObj: emojiData[selectedOption.value], count: this.state.count + 1 },
            () => console.log(this.state.emojiObj)
        );
    };

    render() {

        const { selectedOption, emojiObj, count } = this.state;

        return (
            <div className="article">
                <div className="emoji-select">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        components={{ MenuList }}
                    />
                </div>

                {this.state.emojiObj ? (
                    <EDetails emojiOb={emojiObj} key={count} />
                ) : null}


            </div>
        );
    }
}

export default EViewer;