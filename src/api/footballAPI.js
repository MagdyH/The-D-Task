import store from '../store/configuerStore';
import { APIkey,HttpMethod,LeagueId} from './constants'
import clubActions from '../model/club/actions';
import gameActions from '../model/game/actions';
import clubActionType from '../model/club/constants';
import gameActionType from '../model/game/constants';

const ClientApi = {
getAllClubs:()=>{
    return {type:clubActionType.GET_ALL_CLUB,value:setTimeout(
    fetch('https://apiv2.apifootball.com/?action=get_teams&league_id='+LeagueId+'&APIkey='+APIkey,{
        method:HttpMethod.GET,
     }).then((response) => response.json()
        ).then((data)=>{
        store.dispatch(clubActions.getAllClubs(data));
     }).catch((err)=>{
         return {
             type:"ERROR",
             err
         }
     }),1500)
    }
},


getAllGames:()=>{
    return {type:gameActionType.GET_ALL_GAMES,value:setTimeout(
    fetch('https://apiv2.apifootball.com/?action=get_events&league_id='+LeagueId+'&from=2019-01-01&to=2019-12-30&APIkey='+APIkey,{
        method:HttpMethod.GET,
     }).then((response) => response.json()
        ).then((data)=>{
        store.dispatch(gameActions.getAllGames(data));
     }).catch((err)=>{
         return {
             type:"ERROR",
             err
         }
     }),1500)
    }
},


getGameBetweenTwoClubs:(clubOne,clubTwo)=>{
    return {type:gameActionType.GET_GAME_BETWEEN_TWO_CLUBS,value:setTimeout(
    fetch('https://apiv2.apifootball.com/?action=get_H2H&firstTeam='+clubOne+'&secondTeam='+clubTwo+'&APIkey='+APIkey,{
        method:HttpMethod.GET,
     }).then((response) => response.json()
        ).then((data)=>{
        store.dispatch(gameActions.getGameBetweenTwoClubs(data));
     }).catch((err)=>{
         return {
             type:"ERROR",
             err
         }
     }),1500)
    }
}
}
export default ClientApi;