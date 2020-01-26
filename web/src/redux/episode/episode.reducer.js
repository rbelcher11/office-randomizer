import { EpisodeActionTypes } from "./episode.def";

export const episodeReducer = (state, action) => {
    switch (action.type) {
        case EpisodeActionTypes.SET_EPISODES:{
            return {
                ...state, 
                episodes: action.payload
            };
        }

        default: {
            return state || {};
        }
    }
}