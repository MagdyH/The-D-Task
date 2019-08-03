import {createStore, combineReducers, applyMiddleware} from "redux";
import club from '../model/club/reducers';
import game from '../model/game/reducers'
//import Grid from "./reducers/gridReducers";
//import {applyChange}from "./actions/formActions";
import thunk from 'redux-thunk';
/*
const changePagination = store => next => action =>{

    
        
        let count=0,index=0,size=0;
        
        let result = next(action);

         count = store.getState().User.length;
         index = store.getState().Grid.pageIndex;
         size = store.getState().Grid.pageSize;

        if (action.type !== "APPLY_CHANGE") {
            store.dispatch(applyChange(index,size,count));
        }
        return result;    
}*/

const combined =  combineReducers({club,game})  ; 
const store = createStore(combined,applyMiddleware(thunk));


export default store;