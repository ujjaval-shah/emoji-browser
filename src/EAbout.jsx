import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

class EAbout extends Component {
    render() {

        window.scrollTo(0, 0)

        return (
            <Segment vertical className='stripe'>
                <Container text>
                    this page will be updated soon...
                </Container>
            </Segment>
        );
    }
}

export default withRouter(EAbout);