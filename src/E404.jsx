import React from 'react';
import { Container, Divider, Icon, Segment } from 'semantic-ui-react';

function E404(props) {
    return (
        <Segment vertical className='stripe'>
            <Container text textAlign='center'>
                <div className='large text center'>
                    <Icon name='warning circle' size='huge' />
                    <Divider hidden />
                    Error 404
                    <br />
                    Page Not Found
                </div>
            </Container >
        </Segment >
    );
}

export default E404;