import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';

function ListItems(props) {

    return (
        <div id={props.divID}>

            <Header as='h3' className="subhead"> {props.title} </Header>

            <List relaxed>
                {props.lst.map(
                    (item, index) => (
                        <List.Item key={index}>
                            <Icon name='smile outline' className='small middle aligned'></Icon>
                            <List.Content>
                                {item}
                            </List.Content>
                        </List.Item>
                    )
                )}
            </List>

        </div>
    );
}

export default ListItems;

// title/divID/list