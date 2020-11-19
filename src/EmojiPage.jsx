import React from 'react';
// import EViewer from './EViewer';
import * as emojiDetails from './data/emojiDetailsImages-4.json';
import { useParams, withRouter } from 'react-router-dom';
import EDetails from './EDetails';
import E404 from './E404';

let emojiData = []

function EmojiPage() {

    let { id } = useParams()
    emojiData = emojiDetails.emojiDetailList
    const emojiObj = emojiData.find(obj => obj.id === id)

    window.scrollTo(0, 0)

    if (emojiObj) {
        return (
            <EDetails emojiOb={emojiObj} />
        );
    } else {
        return (
            <E404 />
        )
    }
}

export default withRouter(EmojiPage);