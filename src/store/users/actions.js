export const SET_ERROR = "USERS::SET_ERROR";
export const SET_LOADING = "USERS::SET_LOADING";
export const SET_DATA = "USERS::SET_DATA";

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (todos) => ({
    type: SET_DATA,
    payload: todos
});