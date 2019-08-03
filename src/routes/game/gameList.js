import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClubCard from '../../components/clubCard';
import API from '../../api/footballAPI';
import Actions from '../../model/club/actions';
import GameCard from '../../components/gameCard';
import Utilities from '../../utilities/utility';

/*
container component to show games list and teams.
*/
export function GameList(props) {
    let list = [];
    let latestGames = [];
    let sortedGames = [];
    var date = new Date();
    if(props.Actions){
        props.Actions.applySearchMode('Games');
    }

    if (props.clubs && props.clubs.length > 0) {
        list = props.clubs.map((club) => <ClubCard key={club.team_key} club={club} />)
    }

    if(props.games && props.games.length > 0)
    {
        latestGames = props.games.filter((g) => Utilities.convertDate(g.match_date) <= Utilities.convertDate(date));
        sortedGames = latestGames.sort(function (a, b) {
            return new Date(a.match_date) - new Date(b.match_date);
        }).reverse();
    }

    var gamesGroupByDate = sortedGames.reduce((games, game) => {
        if (!games[game.match_date]) games[game.match_date] = [];
        games[game.match_date].push(game);
        return games;
    }, {});

    const gamesGroup = Object.keys(gamesGroupByDate).map((date) => {
        var date1 = new Date(date);
        date1.setHours(0,0,0,0);
        var date2 = new Date();
        date2.setHours(0,0,0,0);

        var stringDate;
        if(Date.parse(date1) === Date.parse(date2))
        {
            stringDate = "Today";
        }
        else{
            stringDate = date1.toDateString();
        }
        return {
            stringDate,
            games: gamesGroupByDate[date]
        };
    });
    return (
        <div className="container club-data">
            <div className="row my-5">
                <div className="col-md-9">
                    {gamesGroup.length > 0 &&
                        gamesGroup.map((group,index) => <div key={index}>
                            <h1>{group.stringDate}</h1>
                            {group.games.map((game) => <div key={game.match_id}> <GameCard key={game.match_id} game={game} /></div>)}
                        </div>)

                    }
                </div>
                <div className="my-4 col-md-3 Scrollable ">
                    {list}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        clubs: state.club ? state.club.clubs:[],
        games: state.game ? state.game.games:[]
    }
}


function mapDispatcherToProps(dispatch) {
    return {
        API: bindActionCreators(API, dispatch),
        Actions: bindActionCreators(Actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatcherToProps)(GameList);

