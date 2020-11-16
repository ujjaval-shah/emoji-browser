import React from 'react';
import EDescription from './EDescription'
import ListItems from './ListItems'
import EShortCodes from './EShortCodes'
import Images from './Images'
import EUnicodes from './EUnicodes';
import { Container, Header, Segment } from 'semantic-ui-react';

function EDetails(props) {
    return (
        <Segment vertical className="stripe">
            <Container text textAlign='left'>
                <h1> {props.emojiOb.emoji} - {props.emojiOb.title} </h1>

                <div class="ui hidden divider"></div>

                <EDescription content={props.emojiOb.description} />

                <div class="ui section divider"></div>


                {props.emojiOb.aliases.length !== 0 ? (
                    <>
                        <ListItems title="Aliases" divID="aliases" lst={props.emojiOb.aliases} />
                        <div class="ui section divider"></div>
                    </>
                ) : null}


                <EUnicodes title="Unicode" divID="unicodes" lst={props.emojiOb.codepoints} />


                <div class="ui section divider"></div>


                <EShortCodes shortcodes={props.emojiOb.shortcodes} />
                <div class="ui section divider"></div>


                <Header as='h3'> Appearance </Header>
                <Images content={props.emojiOb.images} />

            </Container >
        </Segment>
    );
}

export default EDetails;