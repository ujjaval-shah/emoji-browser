import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Divider, Header, Icon, Label, Segment } from 'semantic-ui-react';

const techData = ['Python3', 'BeautifulSoup4']
const techUi = ['React', 'react-router-dom', 'react-select', 'react-window', 'Semantic-UI-React']

class EAbout extends Component {
    render() {

        window.scrollTo(0, 0)

        return (
            <Segment vertical className='stripe'>
                <Container text textAlign='left'>

                    <h3 style={{ fontWeight: 'normal' }}> This is a fun-project: a website containg details about Emojis. </h3>
                    <Divider />
                    <Header as='h3'> Collecting the Data <a
                        href="https://github.com/ujjaval-shah/Web-scraping-Emojipedia"
                    > <Icon name='github square' size='big' /> </a> </Header>
                    <p> Details about each Emoji is web-scraped with Python3 using BeautifulSoup4. </p>
                    <div>
                        {techData.map(item => (<Label> {item} </Label>))}
                    </div>

                    <Divider />

                    <Header as='h3'> Website and UI <a
                        href="https://github.com/ujjaval-shah/emoji-browser"
                    ><Icon name='github square' size='big' /> </a> </Header>
                    <p> Made in React. Stylized with Semantic UI. </p>
                    <div>
                        {techUi.map(item => (<Label> {item} </Label>))}
                    </div>

                </Container>
            </Segment>
        );
    }
}

export default withRouter(EAbout);