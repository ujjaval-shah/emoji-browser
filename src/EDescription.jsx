import React from 'react';
import { Header } from 'semantic-ui-react';

function EDescription(props) {
    return (
        <>
            <Header as='h3' className="subhead"> Meaning </Header>
            {props.content.map((item, index) => <p key={index}> {item} </p>)}

        </>
    );
}

export default EDescription;

