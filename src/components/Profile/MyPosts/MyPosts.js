import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts() {
    return (
        <div className={styles.myposts}>
            <Post postText="Hello" />
            <Post postText="Qwerty" />
            <Post postText="Ahahaha" />
            <Post />
        </div>
    );
}

export default MyPosts;