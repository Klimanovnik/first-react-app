import {myProfileAPI, usersAPI} from "../api/api";

const S_N_S = "SET_NEW_STATUS";

const initialState = {
    myPosts: {
        posts: [
            {
                id: 0,
                text: "Hello"
            },
            {
                id: 1,
                text: "Qwerty"
            },
            {
                id: 2,
                text: "Ahahaha"
            },
            {
                id: 3,
                text: "Ololo"
            }
        ]
    },
    myStatus: "",
    description: {
        name: "Nikita",
        other: [
            {
                id: 0,
                label: "Date of Birth",
                text: "August 26"
            },
            {
                id: 1,
                label: "City",
                text: "Zaraysk"
            },
            {
                id: 2,
                label: "About me",
                text: "Hello, everyone ! This is my first React application."
            }
        ]
    }
};

export const profileReducer = function (state = initialState, action) {

    switch (action.type) {
        case "ADD-NEW-POST":
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    posts: [
                        ...state.myPosts.posts,
                        {
                            id: state.myPosts.posts.length,
                            text: action.newPost
                        }
                    ]
                }
            };
        case S_N_S:
            return {
                ...state,
                myStatus: action.newStatus
            };
        default:
            return state;
    }
};

const setNewStatus = function (newStatus) {
    return {
        type: S_N_S,
        newStatus
    };
};

export const putMyStatusThunkCreator = (newStatus) => {
    return (dispatch) => {
        myProfileAPI.putMyStatus(newStatus).then(data => {
            if (data.resultCode === 0) {
                dispatch(setNewStatus(newStatus));
            }
        });
    };
};

export const getMyStatusThunkCreator = (myId) => {
    return (dispatch) => {
        usersAPI.getUserStatus(myId).then(status => {
            dispatch(setNewStatus(status));
        });
    };
};
