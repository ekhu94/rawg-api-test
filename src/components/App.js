import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import GamesList from './GamesList';

const App = () => {
    return (
        <Container>
            <SearchBar />
            <GamesList />
        </Container>
    );
};

export default App;