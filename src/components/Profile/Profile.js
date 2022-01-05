import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import Description from './Description/Description';

function Profile(props) {

    return (
        <section className={styles.profile}>
            <Description />
            <MyPosts post={props.profile.post} />
        </section>
    );
}

export default Profile;