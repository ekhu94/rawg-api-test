import rawg from '../apis/rawg';

export const searchTerm = term => {
    return {
        type: 'TERM_SEARCH',
        payload: term
    };
};

export const getGames = () => {
    return async (dispatch) => {
        const res = await rawg.get('/games', {
            params: {
                platforms: 7,
                ordering: '-rating'
            }
        });
        dispatch({ type: 'GET_GAMES', payload: res.data.results });
    };
};