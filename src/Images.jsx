import React from 'react';
import { Label, Segment } from 'semantic-ui-react';

function Images(props) {
    return (
        <div className="img-grid">

            {props.content.map(imgObj => (

                <Segment padded className="forImage">
                    <Label attached='top'> {imgObj.platform} </Label>
                    <img className="ui fluid image my-img" src={imgObj.img_src} alt={imgObj.img_alt} />
                </Segment>

            ))}

        </div>
    );
}

export default Images;