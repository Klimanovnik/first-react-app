const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";

const initialState = {
    users: [],
    pagination: {
        countPerRequest: 5,
        usersTotalCount: 25,
        currentPage: 1
    }
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
        default:
            return state;
    }
};

export const toggleFollowAC = function (userID) {
    return {
        type: TOGGLE_FOLLOW,
        userID
    };
};

export const setUsersAC = function (users) {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPageAC = function (newPage) {
    return {
        type: SET_CURRENT_PAGE,
        newPage
    };
};

export const setUsersTotalCountAC = function (usersTotalCount) {
    return {
        type: SET_USERS_TOTAL_COUNT,
        usersTotalCount
    };
};