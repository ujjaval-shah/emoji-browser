import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Divider, Segment } from 'semantic-ui-react';

function EFooter(props) {
    return (
        <>
            <Divider hidden></Divider>
            <Segment inverted vertical id="foot-seg">
                <Container>
                    This is a fun-project project made with React. More details on the <Link to='/about'> About </Link> page.
                </Container>
                <Divider />
                <Container>
                    🛈 All emoji names are official character and/or CLDR names and code points listed as part of the Unicode Standard.
                    Additional descriptions are copyright © <a href="https://emojipedia.org/">Emojipedia</a>.
                    Emoji images are copyright © their respective creators, unless otherwise noted.
                </Container>
                <Divider />
                <Container>
                    <Link to='/'> Home </Link>|
                    <Link to='/category'> Category </Link>|
                    <Link to='/search'> Search </Link>|
                    <Link to='/surprise-me'> Surprise Me </Link>|
                    <Link to='/about'> About </Link>
                </Container>
            </Segment>
        </>
    );
}

export default withRouter(EFooter);