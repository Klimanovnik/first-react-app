import styles from './Post.module.css';

function Post(props) {
    return (
        <div className={styles.post}>
            {props.postText}
        </div>
    );
}

Post.defaultProps = {
    postText: "Default Text"
};

export default Post;