import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header } from 'semantic-ui-react';

function ButtonsOnHome(props) {
    return (
        <>
            <Container text textAlign='left'>
                <Header as='h2'> Look into this collection of Emojis... </Header>
                <Divider hidden />
                <Button as={Link} size='huge' color='brown' to='/category'>
                    Explore Categories
                </Button>
                <Button as={Link} size='huge' color='green' to='/search'>
                    Search by Name
                </Button>
            </Container>
        </>
    );
}

export default ButtonsOnHome;