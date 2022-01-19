import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    const addPostField = React.createRef();

    const changeNewPostField = function () {
        props.dispatch({
            type: "CHANGE-NEW-POST-FIELD",
            arguments: [addPostField.current.value]
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
                    ref={addPostField}
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