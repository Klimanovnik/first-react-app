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
        ],
        newPostText: ""
    },
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

const profileReducer = function (state = initialState, action) {

    switch (action.type) {
        case "ADD-NEW-POST":
            if (state.myPosts.newPostText === "") {
                return state;
            }

            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    posts: [
                        ...state.myPosts.posts,
                        {
                            id: state.myPosts.posts.length,
                            text: state.myPosts.newPostText
                        }
                    ],
                    newPostText: ""
                }
            };
        case "CHANGE-NEW-POST-FIELD":
            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    newPostText: action.newPostText
                }
            };
        default:
            return state;
    }
};

export {profileReducer};