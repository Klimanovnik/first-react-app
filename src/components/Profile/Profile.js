import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import Description from './Description/Description';

function Profile(props) {
    return (
        <section className={styles.profile}>
            <Description
                description={props.profile.description}
            />
            <MyPosts
                myPosts={props.profile.myPosts}
                changeNewPostField={props.changeNewPostField}
                addNewPost={props.addNewPost}
            />
        </section>
    );
}

export default Profile;