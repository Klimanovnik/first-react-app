import styles from './User.module.css';
import defaultUserPhoto from '../../../assets/img/defaultUserPhoto.png';

const User = function (props) {
    return (
        <section className={styles.user}>
            {props.user &&
                <img
                className={styles.userImage}
                src={
                    props.user.photos?.large
                        ? props.user.photos.large
                        : defaultUserPhoto
                }
                alt="No Image"/>
            }
            <div className={styles.userDescription}>
                <div className={styles.userFullName}>
                    Name: {props.user?.fullName || "------"}
                </div>
                <div className={styles.userAbout}>
                    About: {props.user?.aboutMe || "------"}
                </div>
                <div className={styles.status}>
                    Status: {props.status || "------"}
                </div>
            </div>
        </section>
    );
};

export default User;