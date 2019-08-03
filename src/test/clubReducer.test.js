import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);
import ClubReducer from '../model/club/reducers';
import ClubAction from '../model/club/actions';
import ActionType from '../model/club/constants'


describe('Club Reducer', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
    test("dataRequested", () => {
        const initialState = [{"team_key":"6578",
        "team_name":"Aberdeen",
        "team_badge":"https:\/\/apiv2.apifootball.com\/badges\/6578_aberdeen.png",
        "players":[{"player_key":985509044,"player_name":"Cerny Tomas","player_number":"20","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"34","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                 {"player_key":2854020701,"player_name":"Craddock David","player_number":"30","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"21","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                 {"player_key":135769393,"player_name":"Lewis Joe","player_number":"1","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"31","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                 {"player_key":1610485419,"player_name":"Considine Andrew","player_number":"4","player_country":"Czech Republic","player_type":"Defenders","player_age":"32","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"}],
                 "coaches":[{"coach_name":"McInnes Derek","coach_country":"Czech Republic","coach_age":"48"}]}];

        const expectedActions = [{
          type: ActionType.GET_ALL_CLUB,
          clubs: [{"team_key":"6578",
           "team_name":"Aberdeen",
           "team_badge":"https:\/\/apiv2.apifootball.com\/badges\/6578_aberdeen.png",
           "players":[{"player_key":985509044,"player_name":"Cerny Tomas","player_number":"20","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"34","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                    {"player_key":2854020701,"player_name":"Craddock David","player_number":"30","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"21","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                    {"player_key":135769393,"player_name":"Lewis Joe","player_number":"1","player_country":"Czech Republic","player_type":"Goalkeepers","player_age":"31","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"},
                    {"player_key":1610485419,"player_name":"Considine Andrew","player_number":"4","player_country":"Czech Republic","player_type":"Defenders","player_age":"32","player_match_played":"0","player_goals":"0","player_yellow_cards":"0","player_red_cards":"0"}],
                    "coaches":[{"coach_name":"McInnes Derek","coach_country":"Czech Republic","coach_age":"48"}]}]
          
        }];
        store.dispatch(ClubAction.getAllClubs(initialState));
        expect(store.getActions()).toEqual(expectedActions);
});

test('is working', () => {
    const actionSearch = { type: ActionType.SEARCH_CLUB };
    const actionGetClubs = { type: ActionType.GET_ALL_CLUB };

    const initialStateGetClubs = { clubs: undefined, storedClubs: undefined,searchMode:'' };
    const initialStateSearch = { clubs: [], storedClubs: [],searchMode:'' };

    expect(ClubReducer(undefined, actionSearch)).toEqual(initialStateSearch);
    expect(ClubReducer(undefined, actionGetClubs)).toEqual(initialStateGetClubs);

    expect(ClubReducer(undefined, actionSearch)).toMatchSnapshot();
    expect(ClubReducer(undefined, actionGetClubs)).toMatchSnapshot()
  });
})
