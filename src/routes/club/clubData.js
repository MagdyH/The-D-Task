import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerCard from '../../components/playerCard';
import API from '../../api/footballAPI';
import Actions from '../../model/club/actions';
import GameCard from '../../components/gameCard';
import Utilities from '../../utilities/utility';

/*
container component to show club plyers and next,previous games.
*/
export function ClubData(props) {
    let latestGames = [];
    let nextGames = [];
    let list = [];

    var date = new Date();
    
    var club = props.clubs ? props.clubs.filter((c) => c.team_key === props.match.params.clubId) :[];

    if (club.length > 0) {

        club[0].coaches.map((manager) => list.push(<PlayerCard key={manager.coach_name} manager={manager} />))
        club[0].players.map((player) => list.push(<PlayerCard key={player.player_key} player={player} />))
        nextGames = props.games.filter((g) => Utilities.convertDate(g.match_date) >= Utilities.convertDate(date) && (g.match_hometeam_id === club[0].team_key || g.match_awayteam_id === club[0].team_key));
        latestGames = props.games.filter((g) => Utilities.convertDate(g.match_date) < Utilities.convertDate(date) && (g.match_hometeam_id === club[0].team_key || g.match_awayteam_id === club[0].team_key));
    }

    return (
        <div className="container club-data">
            <div className="row">
                <div className="col-md-9">
                    {club.length > 0 &&
                        <div className="card my-4 mx-2 col-md-6">
                            <div className='row card-body'>
                                <div className="p-0 w-25">
                                    <img alt={''} src={club[0].team_badge} className="img-responsive player-img" />
                                </div>
                                <div className="col-sm-9">
                                    <h1 className="card-title">{club[0].team_name}</h1>
                                    <p className="card-text">{club[0].team_name}</p>
                                </div>

                            </div>
                        </div>
                    }
                    {nextGames.length > 0 &&
                        <div>
                            <h1>Next Game</h1>
                            <div col-md-6>
                                {nextGames.map((g) => <GameCard game={g} />)}
                            </div>
                        </div>
                    }
                    {latestGames.length > 0 &&
                        <div>
                            <h1>Latest Game</h1>
                            <div col-md-6>
                                {latestGames.map((g) => <GameCard game={g} />)}
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatcherToProps)(ClubData);