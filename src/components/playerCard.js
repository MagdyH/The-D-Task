import * as React from 'react';
import image from '../unkown-profile-pic.jpg';

/*
component to show player name and position.
*/

export default function PlayerCard(props) {
    return (
        <div className="row p-2 player-card">
            <div className="p-0 w-25">
                <img alt={''} src={image} className="rounded-circle player-img" />
            </div>
            {
                props.player &&
                <div className="col-sm-9">
                    <div className="font-weight-bold">{props.player.player_name}</div>
                    <p className="text-left">{props.player.player_type}</p>
                </div>
            }
            {
                props.manager &&
                <div className="col-sm-9">
                    <div className="font-weight-bold">{props.manager.coach_name}</div>
                    <p className="text-left">{'Manager'}</p>
                </div>
            }
        </div>
    )
}