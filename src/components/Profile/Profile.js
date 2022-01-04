import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import Description from './Description/Description';

function Profile() {
    return (
        <section className={styles.profile}>
            <Description />
            <MyPosts />
        </section>
    );
}

export default Profile;