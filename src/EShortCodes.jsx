import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';

function EShortCodes(props) {
    return (
        <div>
            <Header as='h3' className="subhead"> Shortcodes </Header>
            <List relaxed>
                {props.shortcodes.map((item, index) =>
                    (
                        <List.Item key={index}>
                            <Icon name='smile outline' className='small middle aligned'></Icon>
                            <List.Content>
                                <highlight>{item.code}</highlight> - {item.platforms.join(", ")}
                            </List.Content>
                        </List.Item>
                    )
                )
                }
            </List>
        </div>
    );
}

export default EShortCodes;