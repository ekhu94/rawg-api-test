import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../actions';

const GamesList = ({ getGames, games, search }) => {

    useEffect(() => {
        getGames();
    }, []);

    return (
        <div>
            Games List
        </div>
    );
};

const mapStateToProps = state => {
    return { games: state.games, search: state.search }
};

export default connect(mapStateToProps, { getGames })(GamesList);