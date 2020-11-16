import React from 'react';
import { Label, Segment } from 'semantic-ui-react';

function Images(props) {
    return (
        <div className="img-grid">
            <Segment padded className="forImage">
                <Label attached='top'>HTML</Label>
                <img className="ui fluid image" src={props.content.Apple} alt="appearance - Apple" style={{ maxWidth: 120, maxHeight: 120, marginTop: 20 }} />
            </Segment>
            <Segment padded className="forImage">
                <Label attached='top'>CSS</Label>
                <img className="ui fluid image" src={props.content.Facebook} alt="appearance - Facebook" style={{ maxWidth: 120, maxHeight: 120 }} />
            </Segment>
            <Segment padded className="forImage">
                <Label attached='top'>CSS</Label>
                <img className="ui fluid image" src={props.content.Google} alt="appearance - Google" style={{ maxWidth: 120, maxHeight: 120 }} />
            </Segment>
            <Segment padded className="forImage">
                <Label attached='top'>CSS</Label>
                <img className="ui fluid image" src={props.content.WhatsApp} alt="appearance - WhatsApp" style={{ maxWidth: 120, maxHeight: 120 }} />
            </Segment>
        </div>
    );
}

export default Images;