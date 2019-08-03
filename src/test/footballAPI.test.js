import API from '../api/footballAPI';
import gameActionType from '../model/game/constants'
import clubActionType from '../model/club/constants'


describe('API Test', () => {

    test("API", () => {
        const initialStateGames = {type:gameActionType.GET_ALL_GAMES,value:3};
        const initialStateClubs = {type:clubActionType.GET_ALL_CLUB,value:2};
        const initialStateTwoClubs = {type:gameActionType.GET_GAME_BETWEEN_TWO_CLUBS,value:4};

        expect(API.getAllClubs(undefined)).toEqual(initialStateClubs);
        expect(API.getAllGames(undefined)).toEqual(initialStateGames);
        expect(API.getGameBetweenTwoClubs(undefined)).toEqual(initialStateTwoClubs);
    });
}); 