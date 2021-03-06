import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { useState } from 'react';
import { Header, Segment, Menu, Container } from 'semantic-ui-react'

function NavBar(props) {

    console.log(props)

    const handleItemClick = (e, { name }) => {
        // setActiveItem(name)

        // this.props.history.push({
        //     pathname: `/${name}`
        // })
    }


    return (
        < Segment inverted id="banner">
            <Header as='h1' inverted color="teal" className='main-head'>
                <span id="title-emoji"> Emoji</span><span id="title-wiki">-wiki </span>
            </Header>
            <Menu icon size='huge' secondary stackable
                widths={5}
                inverted
            >
                <Container
                    text
                    textAlign='center'
                >
                    <Menu.Item as={Link}
                        name='home'
                        active={props.activeTab === 'home'}
                        onClick={handleItemClick}
                        to='/'
                        color='blue'
                    >
                        <i className="home icon"></i>
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='category'
                        active={props.activeTab === 'category'}
                        to='/category'
                        color='blue'
                    >
                        Categories
                    </Menu.Item>


                    <Menu.Item as={Link}
                        name='search'
                        active={props.activeTab === 'search'}
                        to='/search'
                        color='blue'
                    >
                        Search
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='surprise-me'
                        active={props.activeTab === 'surprise-me'}
                        to='/surprise-me'
                        color='blue'
                    >
                        Surprise Me
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='about'
                        active={props.activeTab === 'about'}
                        to='/about'
                        color='blue'
                    >
                        About
                    </Menu.Item>

                </Container>
            </Menu>
        </Segment >)
}

export default withRouter(NavBar);
