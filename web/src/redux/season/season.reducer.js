import {SeasonActionType} from "./season.def";

export const seasonReducer = (state, action) => {

    switch (action.type) {

        case SeasonActionType.SET_ERROR: {
            return {
                ...state,
                error: action.error
            };
        }

        case SeasonActionType.SET_BUSY: {
            return {
                ...state,
                busy: action.state
            };
        }

        case SeasonActionType.SET_SEASONS: {
            return {
                ...state,
                seasons: action.payload
            }
        }

        default: {
            return state || { busy: false };
        }

    }

};
