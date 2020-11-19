import React from 'react';
import { Header } from 'semantic-ui-react';
import EGrids from './EGrids';

function ESeeAlso(props) {

    // console.log(props.content.length)

    if (props.content.length === 0) {
        return (<></>)
    } else {
        return (
            <>
                <Header as='h3'> See Also </Header>
                <EGrids content={props.content} />
            </>
        );
    }
}

export default ESeeAlso;