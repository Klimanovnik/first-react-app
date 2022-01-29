import MyPosts from './MyPosts.js';

function MyPostsContainer(props) {

    const changeNewPostField = function (newValue) {
        props.dispatch({
            type: "CHANGE-NEW-POST-FIELD",
            newPostText: newValue
        });
    };

    const addNewPost = function () {
        props.dispatch({
            type: "ADD-NEW-POST"
        });
    };

    return (
        <MyPosts
            myPosts={props.myPosts}
            addNewPost={addNewPost}
            changeNewPostField={changeNewPostField}
        />
    );
}

export default MyPostsContainer;