import React, { useEffect } from "react";
import {getRestApiEndpoint} from "../../util/config";
import { useDispatch, useSelector } from "react-redux";
import { EpisodeDispatchActions } from "../../redux/episode/episode.action";

export const EpisodeList = ({match: {params: {id}}, ...props}) => {

    const dispatch = useDispatch();
    const selector = useSelector(
        ({episode: {episodes}}) => ({
            episodes
        })
    );

    useEffect(() => {

        dispatch((thunkDispatch) => {

            return fetch(`${getRestApiEndpoint()}/season/${id}/episode`)
                .then((response) => response.json())
                .then((data) => {
                    thunkDispatch(EpisodeDispatchActions.setEpisodes(data));
                });

        });

    }, [id]);

    return (
        <div>
            {selector.episodes && selector.episodes.map((episode, index) => (
                <div key={index}>
                    {episode.name}
                </div>
            ))}
        </div>
    );

};