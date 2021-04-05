import React from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions';
import { Container, Form, Input } from 'semantic-ui-react';

const SearchBar = ({ search, searchTerm }) => {
    return (
        <Container>
            <Form style={{margin: '30px 0'}} onSubmit={e => e.preventDefault()}>
                <Form.Field>
                    <Input placeholder="Search for games" value={search} onChange={e => searchTerm(e.target.value)} />
                </Form.Field>
            </Form>
        </Container>
    );
};

const mapStateToProps = state => {
    return { search: state.search }
};

export default connect(mapStateToProps, { searchTerm })(SearchBar);