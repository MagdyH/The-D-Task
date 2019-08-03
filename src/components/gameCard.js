import * as React from 'react';
import image from '../image-not-found.png';

/*
component to show game teams, team and status.
*/
export default function GameCard(props) {
    //set time to 0, to compare dates without time.
    var date1 = new Date();
    date1.setHours(0, 0, 0, 0);
    var date2 = props.game ? new Date(props.game.match_date):new Date();
    date2.setHours(0, 0, 0, 0);

    return (
        <div className="my-4 game-card">
            {props.game &&
                <div className='row d-flex justify-content-between col-sm-12'>
                    <div className="row d-flex flex-row col-sm-4">
                        <div className="my-2 mx-2 w-25">
                            <img alt={''} src={image} className="img-responsive game-card-img" />
                        </div>
                        <p className="text-center pt-3 mx-2">{props.game.match_hometeam_name}</p>
                    </div>
                    <div className="d-flex justify-content-center col-sm-4">
                        {
                            (props.game.match_live === "1" && !props.game.match_status === "Finished") &&
                            <div>
                                <h1 className="row">
                                    <p className="card-text mx-3">{props.game.match_hometeam_score}</p>
                                    <p> - </p>
                                    <p className="card-text mx-3">{props.game.match_awayteam_score}</p>
                                </h1>
                                <p className="row text-center mx-4">Live Now</p>
                            </div>
                        }
                        {
                            props.game.match_status === "Finished" &&
                            <div>
                                <h1 className="row">
                                    <p className="card-text mx-3">{props.game.match_hometeam_score}</p>
                                    <p> - </p>
                                    <p className="card-text mx-3">{props.game.match_awayteam_score}</p>
                                </h1>
                                <p className="row text-center mx-4">Ended</p>
                            </div>
                        }
                        {
                            (props.game.match_status === "" && Date.parse(date2) === Date.parse(date1)) &&
                            <div>
                                <h1 className="card-title">{props.game.match_time}</h1>
                                <p className="card-text">{'Not Started'}</p>
                            </div>
                        }
                        {
                            (props.game.match_status === "" && Date.parse(date2) !== Date.parse(date1)) &&
                            <div>
                                <h1 className="card-title">{props.game.match_time}</h1>
                                <p className="card-text">{date2.toDateString()}</p>
                            </div>
                        }
                    </div>
                    <div className="row d-flex flex-row-reverse col-sm-4">
                        <div className="my-2 mx-2 w-25">
                            <img alt={''} src={image} className="img-responsive game-card-img" />
                        </div>
                        <p className="text-center pt-3 mx-2">{props.game.match_awayteam_name}</p>
                    </div>
                </div>
            }
        </div>
    )
}