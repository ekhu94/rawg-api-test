import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import GamesList from './GamesList';

const App = () => {
    return (
        <Container fluid>
            <SearchBar />
            <GamesList />
        </Container>
    );
};

export default App;