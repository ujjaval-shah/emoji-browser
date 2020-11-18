import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

class EApi extends Component {
    render() {
        return (

            <Segment vertical className='stripe'>
                <Container text>
                    Page will be updated soon...
                </Container>
            </Segment>

        );
    }
}

export default withRouter(EApi);