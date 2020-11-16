import React, { Component } from 'react';
import emojiInCategory from './data/emojisInCategory.json'
import Select from 'react-select'
import EGrids from './EGrids'

const catOptions = emojiInCategory.catEmojiList.map((item, index) => ({ value: index, label: item.category }))

class ECategoryOld extends Component {

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <>
                <div className="category">
                    <Select

                        styles={{
                            // Fixes the overlapping problem of the component
                            menu: provided => ({ ...provided, zIndex: 10 })
                        }}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={catOptions}
                    />
                </div>
                <div className="output">
                    {selectedOption ? (
                        <EGrids itemIndex={selectedOption.value} />
                    ) : null}

                </div >
            </>
        );
    }
}

ECategoryOld.propTypes = {

};

export default ECategoryOld;