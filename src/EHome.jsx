import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import ButtonsOnHome from './ButtonsOnHome';

function EHome(props) {

    window.scrollTo(0, 0)

    return (
        <Segment vertical className='stripe'>

            <ButtonsOnHome />

            <Divider hidden className='my-divide' />

            <Segment raised padded='very' className="text container" textAlign='left'>
                <p> <span className="large text"> Emojis </span>  are essential to communicate emotion, something that words cannot portray. Emojis are meant to be fun, light-hearted, and convey a broad range of emotions efficiently and in a way that words sometimes cannot. </p>
                <Divider hidden />
                <p> <span className="large text"> Not </span> only do emojis liven up your conversations, but they also have the ability to pick up where correct grammar or physical cues are lacking. It is important to emphasize our communication with our body language and facial expressions, yet technological advances make that a difficult task. </p>
                <Divider hidden />
                <p> <span className="large text"> However, </span> emojis make the task less daunting and more entertaining for both the reader and the sender. They are a more advanced form of text-based, casual conversation and they engage the reader. </p>
                <Divider hidden />
                <p> <span className="large text"> Physical </span> presence is necessary to truly understand and feel included in any communication, and emojis are the 21st Century’s digital answer to the reality that we cannot always be present. </p>
                <Divider hidden />
                <p className="small text"> This section is taken from a blog of Meghan Richards on <a
                    href='https://eternitymarketing.com/blog/the-importance-of-emojis'
                > Eternity</a>. </p>
            </Segment >

            <Divider hidden className='my-divide' />

            <ButtonsOnHome />

        </Segment>
    );
}

export default EHome;