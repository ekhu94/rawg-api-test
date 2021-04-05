import React from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions';
import { Form, Input } from 'semantic-ui-react';

const SearchBar = ({ search, searchTerm }) => {
    return (
        <Form style={{marginTop: '20px'}} onSubmit={e => e.preventDefault()}>
            <Form.Field>
                <Input placeholder="Search for games" value={search} onChange={e => searchTerm(e.target.value)} />
            </Form.Field>
        </Form>
    );
};

const mapStateToProps = state => {
    return { search: state.search }
};

export default connect(mapStateToProps, { searchTerm })(SearchBar);