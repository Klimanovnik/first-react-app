import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    const changeNewPostField = function (event) {
        props.dispatch({
            type: "CHANGE-NEW-POST-FIELD",
            newPostText: event.currentTarget.value
        });
    };

    const addNewPost = function () {
        props.dispatch({
            type: "ADD-NEW-POST"
        });
    };

    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input
                    type="text"
                    value={props.myPosts.newPostText}
                    onChange={changeNewPostField} />
                <button onClick={addNewPost}>{props.myPosts.addPostButtonText}</button>
            </div>
            <div className={styles.posts}>
                {props.myPosts.posts.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;