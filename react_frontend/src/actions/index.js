import { JOBS_LIST, JOB_ITEM } from "./types";
import LocalAPI from "./../apis/local";
import history from "./../history";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}

export const fetchAuthTokenRegister = (username, password, key) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/auth/register`, {username, password, key});
        const { data } = response
        if (data !== "Incorrect key") {
            dispatch(setAuthToken(data.token));
            history.push("/bookmarks");
        } else {
            sessionStorage.removeItem("token");
            history.push("/register");
        }
    }
}

export const fetchAuthTokenLogin = (username, password, key) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/auth/login`, { username, password})
        const { data } = response
        if (data !== undefined) {
            dispatch(setAuthToken(data.token));
            history.push("/jobs");
        } else {
            sessionStorage.removeItem("token");
            history.push("/login");
        }
    }
}

export const setJobs = (jobs) => {
    return {
        type: JOBS_LIST,
        payload: jobs
    };
}

export const setCurrentJob = (job) => {
    return {
        type: JOB_ITEM,
        payload: job
    };
} 

export const fetchJobs = () => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.get("/jobs");
        dispatch(setJobs(response.data));
    }
}

export const fetchJob = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const response = await LocalAPI.get("/jobs/show", {params: { id }});
        dispatch(setCurrentJob(response.data));
    }
}

export const createJob = (customerName) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/jobs/new`, { customerName });
        dispatch(setCurrentJob(response.data));
    } 
}