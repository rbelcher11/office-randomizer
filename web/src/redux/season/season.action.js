import {SeasonActionType} from "./season.def";

export const SeasonDispatchActions = {

    setBusy(state) {
        return {
            type: SeasonActionType.SET_BUSY,
            state
        };
    },

    setError(error) {
        return {
            type: SeasonActionType.SET_ERROR,
            error
        };
    },

    setSeasons(payload) {
        return {
            type: SeasonActionType.SET_SEASONS,
            payload
        };
    }

};
