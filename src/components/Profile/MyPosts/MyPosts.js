import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {
    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input type="text"></input>
                <button>Add Post</button>
            </div>
            <div className={styles.posts}>
                {props.post.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;