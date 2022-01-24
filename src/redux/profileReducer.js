const profileReducer = function (state, action) {

    switch (action.type) {
        case "ADD-NEW-POST":
            const posts = state.myPosts.posts;
            posts.push({
                id: posts.length,
                text: state.myPosts.newPostText
            });
            state.myPosts.newPostText = "";
            break;
        case "CHANGE-NEW-POST-FIELD":
            state.myPosts.newPostText = action.newPostText;
            break;
    }
};

export default profileReducer;