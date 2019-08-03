import * as React from 'react';
//import store from '../store/configuerStore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import API from '../api/footballAPI';
import clubActions from '../model/club/actions';
import gameActions from '../model/game/actions';

/*
search component which handle clubs search and game search with two teams.
*/
export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamOne: '',
            teamTwo: ''
        }
    }

    render() {
        return (
            <div className="mt-4">
                {this.props.searchType === 'Clubs' &&
                    <div class="d-flex justify-content-center h-100">
                        <div className="searchbar my-0">
                            <input className="search_input" type="text" placeholder="Search..." aria-label="Search" onChange={(event) => {
                                if (window.location.pathname === '/Clubs') {
                                    this.props.clubActions.searchClubs(event.target.value);
                                }
                                else if (window.location.pathname === '/FixturesResults') {
                                    this.props.gameActions.searchGames(event.target.value);
                                }
                            }} />
                            <i className="fa fa-search ml-3" aria-hidden="true"></i>
                        </div>
                    </div>
                }
                {
                    this.props.searchType === 'Games' &&

                    <form className="form-inline mr-auto">
                        <div className="md-form my-0">
                            <input className="form-control mx-2" type="text" placeholder="First Team" aria-label="Search" value={this.state.teamOne} onChange={(event) => {
                                this.setState({ teamOne: event.target.value });
                            }} />

                            <input className="form-control mx-2" type="text" placeholder="Second Team" aria-label="Search" value={this.state.teamTwo} onChange={(event) => {
                                this.setState({ teamTwo: event.target.value });
                            }} />
                            <button className='btn btn-search btn-primary mx-2' onClick={(event) => {
                                event.preventDefault();
                                this.props.API.getGameBetweenTwoClubs(this.state.teamOne, this.state.teamTwo);
                            }}>
                                <i className="fa fa-search text-white ml-3" aria-hidden="true"></i> Search</button>
                        </div>
                    </form>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatcherToProps(dispatch) {
    return {
        API: bindActionCreators(API, dispatch),
        clubActions: bindActionCreators(clubActions, dispatch),
        gameActions: bindActionCreators(gameActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatcherToProps)(Search);

