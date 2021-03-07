
import {SET_ERROR} from "./ActionTypes";

export const setErrorAction = (error) => {
    return {
        type: SET_ERROR,
        error,
    }
}
