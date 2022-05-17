const S_A_D = "SET_AUTH_DATA";

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