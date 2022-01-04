import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';

function Profile() {
    return (
        <section className={styles.profile}>
            <div className={styles.image}></div>
            <div className="description">
                Avatar + Description
            </div>
            <MyPosts />
        </section>
    );
}

export default Profile;