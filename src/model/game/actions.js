

import ActionType from './constants';

export const Actions = {
    getAllGames: (games)=>{
        return {type:ActionType.GET_ALL_GAMES,games}
    },
    getGameBetweenTwoClubs: (games)=>{
        return {type:ActionType.GET_GAME_BETWEEN_TWO_CLUBS,games}
    }
}
export default Actions;
