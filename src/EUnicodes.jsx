import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';

function EUnicodes(props) {
    return (
        <div>
            <div id={props.divID}>
                <Header as='h3' className="subhead"> {props.title} </Header>
                <List relaxed>
                    <List.Item>
                        <Icon name='smile outline' className='small middle aligned'></Icon>
                        <List.Content>
                            {`( ${props.lst.join(", ")} )`}
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        </div>
    );
}

export default EUnicodes;