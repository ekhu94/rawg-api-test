import rawg from '../apis/rawg';

export const getAllGames = () => {
    return async (dispatch) => {
        const res = await rawg.get('/games', {
            params: {
                platforms: 7,
                page_size: 10
            }
        });
        dispatch({ type: 'GET_ALL_GAMES', payload: res.data });
    };
};