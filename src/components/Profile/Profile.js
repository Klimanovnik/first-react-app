import styles from './Profile.module.css';
import Description from './Description/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <section className={styles.profile}>
            <Description
                description={props.profile.description}
            />
            <MyPostsContainer />
        </section>
    );
}

export default Profile;