import ActionType from './constants';

export default function clubReducer(state = { clubs: [], storedClubs: [],searchMode:'' }, action) {
    switch (action.type) {
        case ActionType.GET_ALL_CLUB:
            return { ...state, clubs: action.clubs, storedClubs: action.clubs }
        case ActionType.SEARCH_CLUB:
            let result = [];
            if (action.searchTirm === "" || action.searchTirm === undefined) {
                result = state.storedClubs;
            }
            else {
                if (state.storedClubs.length > 0)
                    result = state.storedClubs.filter((club) => club.team_name.toLowerCase().includes(action.searchTirm.toLowerCase()));
            }
            return { ...state, clubs: result }
        case ActionType.SEARCH_MODE:
            return { ...state, searchMode: action.searchMode }
        default:
            return state;
    }
}