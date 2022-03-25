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
            const posts = state.myPosts.posts;
            posts.push({
                id: posts.length,
                text: state.myPosts.newPostText
            });
            state.myPosts.newPostText = "";

            return { ...state };
        case "CHANGE-NEW-POST-FIELD":
            state.myPosts.newPostText = action.newPostText;
            return { ...state };
        default:
            return state;
    }
};

export default profileReducer;