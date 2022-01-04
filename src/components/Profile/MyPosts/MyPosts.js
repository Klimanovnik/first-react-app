import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts() {
    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input type="text"></input>
                <button>Add Post</button>
            </div>
            <div className={styles.posts}>
                <Post postText="Hello" />
                <Post postText="Qwerty" />
                <Post postText="Ahahaha" />
                <Post />
            </div>
        </section>
    );
}

export default MyPosts;