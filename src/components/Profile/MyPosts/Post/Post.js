import styles from './Post.module.css';

function Post(props) {

    /*    
        props = {
            postText: "..."
        };
    */

    return (
        <div className={styles.post}>
            {props.postText}
        </div>
    );
}

export default Post;