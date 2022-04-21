const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {
            id: 0,
            icon: "#",
            followed: true,
            userDescription: {
                fullName: "Nikita",
                status: "Hi! I'am create my first React app.",
                location: {
                    country: "Russia",
                    city: "Zaraysk"
                }
            }
        },
        {
            id: 1,
            icon: "#",
            followed: false,
            userDescription: {
                fullName: "Boris",
                status: "Music is my life",
                location: {
                    country: "USA",
                    city: "Seattle"
                }
            }
        }
    ]
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
                users: [...state.users, ...action.users]
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