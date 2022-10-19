import {checkAuthThunkCreator} from "./authReducer";

const I_S = "INITIALIZED_SUCCESSFULLY";

const initialState = {
    isInitialized: false
};

export const appReducer = function (state = initialState, action) {
    switch (action.type) {
        case I_S:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};

// Action Creators

const initializedSuccessfully = () => ({type: I_S});

// Thunk Creators

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
        Promise.all([dispatch(checkAuthThunkCreator())]).then(() => {
            dispatch(initializedSuccessfully());
        });
    };
};
