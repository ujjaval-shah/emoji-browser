import React from 'react';
// import EViewer from './EViewer';
import * as emojiDetails from './data/emojiDetailsImages-3.json';
import { useParams } from 'react-router-dom';
import EDetails from './EDetails';

let emojiData = []

function EmojiPage() {

    let { id } = useParams()
    emojiData = emojiDetails.emojiDetailList
    const emojiObj = emojiData.find(obj => obj.id === id)

    return (
        <> <EDetails emojiOb={emojiObj} /> </>
    );
}

export default EmojiPage;