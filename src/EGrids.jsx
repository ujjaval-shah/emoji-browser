import React from 'react';
import { Link } from 'react-router-dom';

// import * as data from './data/emojisInCategory.json'

function EGrids(props) {

    // let emojiList = data.catEmojiList[props.itemIndex].emojiList

    return (
        <div className="eGrid">

            {props.content.map((item) => <div className="grid-element" key={item.url}>
                <Link className="bn39" to={item.url}>
                    <span className="bn39span">  {item.emoji} </span>
                </Link>
            </div>)}

        </div>
    );
}

export default EGrids;