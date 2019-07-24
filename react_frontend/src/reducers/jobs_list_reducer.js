import { JOBS_LIST } from "../actions/types";

const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case JOBS_LIST:
            return action.payload;
        default:
            return state;
    }
}