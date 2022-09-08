import MyPosts from './MyPosts.js';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        myPosts: state.profile.myPosts
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addNewPost(newPost) {
            dispatch({
                type: "ADD-NEW-POST",
                newPost
            });
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;