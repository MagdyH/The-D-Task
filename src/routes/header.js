import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/searchComponent';
import image from '../The-D-GmbH.png';
import { bindActionCreators } from 'redux';
import API from '../api/footballAPI';
import Actions from '../model/club/actions';


export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            clubGameFlag:''
        }
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light header">
                    <img className="d-inline-block align-top header-img mx-4" alt={''} src={image} />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/FixturesResults">Fixtures Results</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/Clubs">Clubs</Link></li>
                        </ul>
                    </div>
                    <Search searchType={this.props.searchMode} />                    
                </nav>
            </header>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        searchMode:state.club? state.club.searchMode:''
    }
}


function mapDispatcherToProps(dispatch) {
    return {
        API: bindActionCreators(API, dispatch),
        Actions: bindActionCreators(Actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatcherToProps)(Header);