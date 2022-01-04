import styles from './Description.module.css';
import image from './img/image.jpg';

function Description() {
    return (
        <div className={styles.description}>
            <div className={styles.descriptionImage}>
                <img src={image} alt="" width="100%" height="100%" />
            </div>
            <div className={styles.descriptionInfo}>
                <div className={styles.descriptionName}>Klimanov Nikita</div>
                <div className={styles.descriptionText}>
                    <span className={styles.descriptionTextLabel}>Date of Birth:</span>
                    August 26
                </div>
                <div className={styles.descriptionText}>
                    <span className={styles.descriptionTextLabel}>City:</span>
                    Zaraysk
                </div>
                <div className={styles.descriptionText}>
                    <span className={styles.descriptionTextLabel}>About me:</span>
                    Hello, everyone ! This is my first React application.
                </div>
            </div>
        </div>
    );
}

export default Description;