import * as React from 'react';
import { Link } from 'react-router-dom';

/*
    component to show club name and pic.
*/
export default function ClubCard(props) {
    return (
        <div className="col-sm-9 my-4">
            {props.club &&
                <div>
                    <img src={props.club.team_badge} className="card-img-top my-1" alt="..." />
                    <div className="text-center club-card">
                        <Link className="nav-link" to={'/clubData/' + props.club.team_key} >{props.club.team_name}</Link>

                    </div>
                </div>
            }
        </div>
    )
}