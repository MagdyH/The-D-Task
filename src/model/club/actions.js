import ActionType from './constants';

export const Actions = {
    getAllClubs: (clubs)=>{
        return {type:ActionType.GET_ALL_CLUB,clubs}
    },
    searchClubs:(searchTirm)=>{
        return {type:ActionType.SEARCH_CLUB,searchTirm}
    },
    applySearchMode:(searchMode)=>{
        return {type:ActionType.SEARCH_MODE,searchMode}
    }
}
export default Actions;
