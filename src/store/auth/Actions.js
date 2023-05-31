import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../ActionTypes';

const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload,
});

const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload,
});

const logout = payload => ({
    type: LOGOUT,
    payload,
});

export default {
    loginSuccess,
    loginFailure,
    logout
}