import React, { useState } from "react";
import * as emojiDetails from './data/emojiDetailsImages-5.json';
import Select from "react-select";

const emojiData = emojiDetails.emojiDetailList
const options = emojiData.map((obj, index) => ({ label: `${obj.emoji} ${obj.title}`, value: index }))

function EmojiViewer(props) {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="emoji-select">
            <Select
                onChange={setSelectedOption}
                options={options}
            />

            <div>
                debug: {selectedOption}
            </div>

        </div>
    );
}

export default EmojiViewer;