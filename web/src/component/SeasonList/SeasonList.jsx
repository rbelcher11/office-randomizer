import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SeasonDispatchActions} from "../../redux/season/season.action";
import {faCaretRight, faRecycle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getRestApiEndpoint} from "../../util/config";
import './SeasonList.css';

export const SeasonList = ({...props}) => {

    const dispatch = useDispatch();
    const selector = useSelector(
        ({season: {busy, error, seasons}}) => ({
            busy,
            error,
            seasons
        })
    );

    useEffect(() => {

        dispatch((thunkDispatch) => {

            thunkDispatch(SeasonDispatchActions.setBusy(true));
            thunkDispatch(SeasonDispatchActions.setError(null));

            return fetch(`${getRestApiEndpoint()}/season`)
                .then((data) => data.json())
                .then((data) => {

                    thunkDispatch(SeasonDispatchActions.setSeasons(data));
                    thunkDispatch(SeasonDispatchActions.setBusy(false));

                }).catch((err) => {

                    thunkDispatch(SeasonDispatchActions.setError(err.message));
                    thunkDispatch(SeasonDispatchActions.setBusy(false));

                })

        })

    }, []);

    return (
        <div>

            {selector.busy && (
                <span>
                    <FontAwesomeIcon icon={faRecycle} spin/>
                </span>
            )}

            {selector.error && (
                <span>
                    There was an error getting the seasons
                </span>
            )}

            <ul className="Season-list">
                {selector.seasons && selector.seasons.map((season, index) => (
                    <li key={`season-${index}`}>
                        <div>
                            <span className="Season-title">{season.name}</span>
                            <span className="Season-episode-count">{season.episodeCount} episodes</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCaretRight}/>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );

};
