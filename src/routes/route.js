import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
//import Home from './Welcome';
import Club from '../routes/club/clubList';
import ClubData from '../routes/club/clubData';
import Game from '../routes/game/gameList';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Club} />
            <Route path="/FixturesResults" component={Game} />
            <Route path="/Clubs" component={Club} />
            <Route path='/clubData/:clubId' component={ClubData} />}
            />
        </Switch>

    )
}

export default Router;