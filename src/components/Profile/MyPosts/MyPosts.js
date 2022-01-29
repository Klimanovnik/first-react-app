import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    const onPostChange = function (event) {
        props.changeNewPostField(event.currentTarget.value);
    };

    const onAddPost = function () {
        props.addNewPost();
    };

    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input
                    type="text"
                    value={props.myPosts.newPostText}
                    onChange={onPostChange} />
                <button onClick={onAddPost}>{props.myPosts.addPostButtonText}</button>
            </div>
            <div className={styles.posts}>
                {props.myPosts.posts.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;