import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const S_A_D = "SET_AUTH_DATA";
const C_A_D = "CLEAR_AUTH_DATA";

const initialState = {
    isAuth: false,
    authData: {
        id: null,
        login: null,
        email: null
    }
};

export const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case S_A_D:
            return {
                ...state,
                isAuth: true,
                authData: {
                    ...state.authData,
                    ...action.authData
                }
            };
        case C_A_D:
            return initialState;
        default:
            return state;
    }
};

// Action Creators

export const setAuthData = function (authData) {
    return {
        type: S_A_D,
        authData
    };
};

const clearAuthData = function () {
    return {
        type: C_A_D
    };
};

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        return authAPI.checkAuth().then(({ resultCode, data }) => {
            if (resultCode === 0) {
                dispatch(setAuthData(data));
            }
        });
    };
};

export const loginThunkCreator = ({ email, password, rememberMe }) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(checkAuthThunkCreator());
            } else if (data.resultCode === 1) {
                dispatch(stopSubmit('login', { _error: 'Incorrect Email or Password' }));
            }
        });
    };
};

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(({ resultCode }) => {
            if (resultCode === 0) {
                dispatch(clearAuthData());
            }
        });
    };
};
