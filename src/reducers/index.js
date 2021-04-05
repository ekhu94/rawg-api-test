import { combineReducers } from 'redux';

const searchReducer = (state='', action) => {
    switch (action.type) {
        case 'TERM_SEARCH':
            return action.payload;
        default:
            return state;
    }
};

const gamesReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_GAMES':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    search: searchReducer,
    games: gamesReducer
});