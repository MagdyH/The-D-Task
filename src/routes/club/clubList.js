import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import API from '../../api/footballAPI';
import Actions from '../../model/club/actions';
import ClubCard from '../../components/clubCard'
/*
container component to show clubs list.
*/
export function ClubList(props) {
    if(props.Actions){
        props.Actions.applySearchMode('Clubs');
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='row col-md-12'>
                {(props.clubs && props.clubs.length) > 0 &&
                    props.clubs.map((club) => {
                        return <div className='col-md-3'>
                            <ClubCard key={club.team_key} club={club} />
                        </div>
                    
                    })
                }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        clubs: state.club? state.club.clubs:[]
    }
}


function mapDispatcherToProps(dispatch) {
    return {
        API: bindActionCreators(API, dispatch),
        Actions: bindActionCreators(Actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatcherToProps)(ClubList);