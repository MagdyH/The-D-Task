import ActionType from './constants';

export default function gameReducer(state = { games: [],storedGames:[] }, action) {
    switch (action.type) {
        case ActionType.GET_ALL_GAMES:
            return { ...state, games: action.games,storedGames:[] }
        case ActionType.GET_GAME_BETWEEN_TWO_CLUBS:
                
            let games =action.games ? action.games.firstTeam_VS_secondTeam:[];
            return { ...state, games: games }
        default:
            return state;
    }
}