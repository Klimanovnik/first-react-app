import MyPosts from './MyPosts.js';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        posts: state.profile.myPosts.posts,
        newPostText: state.profile.myPosts.newPostText
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addNewPost() {
            dispatch({
                type: "ADD-NEW-POST"
            });
        },
        changeNewPostField(newValue) {
            dispatch({
                type: "CHANGE-NEW-POST-FIELD",
                newPostText: newValue
            });
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;