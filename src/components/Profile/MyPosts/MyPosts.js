import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts(props) {

    /*
        props = {
            myPosts: {
                posts: [
                    { id: 1, text: "Hello" },
                    { id: 2, text: "Qwerty" },
                    { id: 3, text: "Ahahaha" },
                    { id: 4, text: "Ololo" },
                    { id: 5, text: "asddfdgfsgd" }
                ],
                addPostButtonText: "Add Post",
            }
        };
    */

    return (
        <section className={styles.myposts}>
            <div className={styles.addPost}>
                <input type="text"></input>
                <button>{props.myPosts.addPostButtonText}</button>
            </div>
            <div className={styles.posts}>
                {props.myPosts.posts.map(post => <Post key={post.id} postText={post.text} />)}
            </div>
        </section>
    );
}

export default MyPosts;