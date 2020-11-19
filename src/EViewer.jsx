import React, { Component } from 'react';
import * as emojiDetails from './data/emojiDetailsImages-5.json';
import Select from "react-select";
import EDetails from './EDetails'

let emojiData = []
let options = []

class EViewer extends Component {

    componentWillMount() {
        emojiData = emojiDetails.emojiDetailList
        options = emojiData.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))
    }

    state = {
        selectedOption: null,
        emojiObj: null
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption, emojiObj: emojiData[selectedOption.value] },
            () => console.log(this.state.emojiObj)
        );
    };

    render() {

        const { selectedOption, emojiObj } = this.state;

        return (
            <div className="article">
                <div className="emoji-select">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                </div>

                {this.state.emojiObj ? (
                    <EDetails emojiOb={emojiObj} />
                ) : null}


            </div>
        );
    }
}

export default EViewer;