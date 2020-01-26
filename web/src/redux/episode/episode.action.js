import { EpisodeActionTypes } from "./episode.def";

export const EpisodeDispatchActions = {
    setEpisodes(payload){
        return {
            type: EpisodeActionTypes.SET_EPISODES,
            payload
        };
    }
};