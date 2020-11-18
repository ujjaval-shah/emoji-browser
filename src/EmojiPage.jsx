import React from 'react';
// import EViewer from './EViewer';
import * as emojiDetails from './data/emojiDetailsImages-4.json';
import { useParams, withRouter } from 'react-router-dom';
import EDetails from './EDetails';

let emojiData = []

function EmojiPage() {

    let { id } = useParams()
    emojiData = emojiDetails.emojiDetailList
    const emojiObj = emojiData.find(obj => obj.id === id)

    window.scrollTo(0, 0)

    return (
        <> <EDetails emojiOb={emojiObj} /> </>
    );
}

export default withRouter(EmojiPage);