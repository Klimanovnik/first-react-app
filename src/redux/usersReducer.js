import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const T_F = "TOGGLE_FETCHING";
const S_U = "SET_USER";
const S_U_F_I_P = "SET_USER_FOLLOWING_IN_PROGRESS";

const initialState = {
    users: [],
    pagination: {
        countPerRequest: 5,
        usersTotalCount: 100,
        currentPage: 1
    },
    isFetching: false,
    user: null,
    disabledButtons: []
};

export const usersReducer = function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: !user.followed
                        };
                    }

                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.newPage
                }
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    usersTotalCount: action.usersTotalCount
                }
            };
        case T_F:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case S_U:
            return {
                ...state,
                user: action.newUser
            };
        case S_U_F_I_P:
            return {
                ...state,
                disabledButtons: action.inProgress
                    ? [...state.disabledButtons, action.userId]
                    : state.disabledButtons.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};


// Action Creators

export const toggleFollow = function (userID) {
    return {
        type: TOGGLE_FOLLOW,
        userID
    };
};

export const setUsers = function (users) {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPage = function (newPage) {
    return {
        type: SET_CURRENT_PAGE,
        newPage
    };
};

export const setUsersTotalCount = function (usersTotalCount) {
    return {
        type: SET_USERS_TOTAL_COUNT,
        usersTotalCount
    };
};

export const toggleFetching = function (isFetching) {
    return {
        type: T_F,
        isFetching
    };
};

export const setUser = function (newUser) {
    return {
        type: S_U,
        newUser
    };
};

export const setUserFollowingInProgress = function (inProgress, userId) {
    return {
        type: S_U_F_I_P,
        inProgress,
        userId
    };
};

export const getUsersThunkCreator = (countPerRequest, currentPage) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));

        usersAPI.getUsers(countPerRequest, currentPage).then(data => {
            // dispatch(setUsersTotalCount(data.totalCount));
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
        });
    };
};

export const toggleFollowThunkCreator = ({id, followed}) => {
    return (dispatch) => {
        dispatch(setUserFollowingInProgress(true, id));

        usersAPI.followAndUnfollow(id, followed).then(data => {
            dispatch(setUserFollowingInProgress(false, id));

            if (data.resultCode === 0) {
                dispatch(toggleFollow(id));
            }
        });
    };
};