import styles from './MyPosts.module.css';
import Post from './Post/Post.js';
import AddPost from "./AddPost";

function MyPosts({ myPosts, addNewPost }) {
    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <AddPost onSubmit={({ newPost }) => addNewPost(newPost)}/>
            </div>
            <div className={styles.posts}>
                {myPosts.posts.map(post => <Post key={post.id} postText={post.text}/>)}
            </div>
        </section>
    );
}

export default MyPosts;