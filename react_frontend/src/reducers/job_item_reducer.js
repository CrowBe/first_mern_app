import { JOB_ITEM } from "../actions/types";

const defaultState = {
    job: null
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case JOB_ITEM:
            return action.payload;
        default:
            return state;
    }
}