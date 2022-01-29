import styles from './Profile.module.css';
import Description from './Description/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <section className={styles.profile}>
            <Description
                description={props.profile.description}
            />
            <MyPostsContainer
                myPosts={props.profile.myPosts}
                dispatch={props.dispatch}
            />
        </section>
    );
}

export default Profile;