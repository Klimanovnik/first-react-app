import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    const onPostChange = function (event) {
        props.changeNewPostField(event.currentTarget.value);
    };

    const onAddPost = function () {
        props.addNewPost();
    };

    const onEnter = function (event) {
        if (event.code === "Enter" && !event.repeat) {
            onAddPost();
        }
    };

    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input
                    type="text"
                    value={props.newPostText}
                    onChange={onPostChange}
                    onKeyDown={onEnter} />
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {props.posts.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;