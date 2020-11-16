import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { Header, Segment, Menu, Container } from 'semantic-ui-react'

function NavBar(props) {

    // const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        // setActiveItem(name)

        // this.props.history.push({
        //     pathname: `/${name}`
        // })
    }


    return (
        < Segment inverted>
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
                        // active={activeItem === 'home'}
                        onClick={handleItemClick}
                        to='/'
                        color='blue'
                    >
                        <i class="home icon"></i>
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='categories'
                        // active={activeItem === 'categories'}
                        to='/category'
                        color='blue'
                    >
                        Categories
                    </Menu.Item>


                    <Menu.Item as={Link}
                        name='search'
                        // active={activeItem === 'search'}
                        to='/search'
                        color='blue'
                    >
                        Search
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='api'
                        // active={activeItem === 'api'}
                        to='/api'
                        color='blue'
                    >
                        API
                    </Menu.Item>

                    <Menu.Item as={Link}
                        name='about'
                        // active={activeItem === 'about'}
                        to='/about'
                        color='blue'
                    >
                        About
                    </Menu.Item>

                </Container>
            </Menu>
        </Segment >)
}

export default NavBar;
