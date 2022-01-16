import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    const addPostField = React.createRef();

    const newPostChange = function () {
        props.changeNewPostField(addPostField.current.value);
    };

    const addPost = function () {
        props.addNewPost();
    };

    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input
                    ref={addPostField}
                    type="text"
                    value={props.myPosts.newPostText}
                    onChange={newPostChange} />
                <button onClick={addPost}>{props.myPosts.addPostButtonText}</button>
            </div>
            <div className={styles.posts}>
                {props.myPosts.posts.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;