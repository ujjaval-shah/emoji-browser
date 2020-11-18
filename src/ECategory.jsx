import React, { Component } from 'react';
import Select from 'react-select';
import { Container, Segment, Header, Divider } from 'semantic-ui-react';
import emojiInCategoty from './data/emojisInCategory.json'
import EGrids from './EGrids';

let catOptions = []

class ECategory extends Component {

    state = {
        selectedOption: null,
    };

    componentWillMount() {
        catOptions = emojiInCategoty.catEmojiList.map((item, index) => ({ value: index, label: item.category }))
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.catId, catOptions[params.catId])
        if (params.catId !== 'undefined') {
            this.setState({ selectedOption: catOptions[params.catId] },
                () => console.log(`Option selected:`, this.state.selectedOption)
            )
        }
    }

    handleChange = selectedOption => {

        this.props.history.push({
            pathname: `/category/${selectedOption.value}`
        })

        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );

    };

    render() {
        const { selectedOption } = this.state;

        return (
            <Segment vertical className="stripe">
                <Container text>
                    <Header as='h2' textAlign='left' color='blue'> Choose a category and Explore emojis... </Header>

                    <Divider hidden />

                    <Select
                        styles={{
                            // Fixes the overlapping problem of the component
                            menu: provided => ({ ...provided, zIndex: 10 }),
                        }}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={catOptions}
                        isSearchable={false}
                    />

                    <Divider hidden />

                    {selectedOption ? (
                        <EGrids content={emojiInCategoty.catEmojiList[selectedOption.value]} />
                    ) : null}

                </Container>


            </Segment>
        );
    }
}

export default ECategory;


// const emojiInCategoty = require('./src/data/emojisInCategory.json')

// const catOptions = emojiInCategoty.catEmojiList.map((item, index) => ({ value: index, label: item.category }))
// console.log(catOptions)

// emojiInCategoty.catEmojiList
