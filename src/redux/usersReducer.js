const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const T_F = "TOGGLE_FETCHING";
const S_U = "SET_USER";

const initialState = {
    users: [],
    pagination: {
        countPerRequest: 5,
        usersTotalCount: 100,
        currentPage: 1
    },
    isFetching: false,
    user: null
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