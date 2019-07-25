import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import jobsListReducer from "./jobs_list_reducer";
import jobItemReducer from "./job_item_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    jobs: jobsListReducer,
    job: jobItemReducer,
    form: formReducer
});