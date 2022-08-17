import styles from './Description.module.css';
import image from './img/image.jpg';
import MyStatus from "./MyStatus";

function Description(props) {
    return (
        <div className={styles.description}>
            <div className={styles.descriptionImage}>
                <img src={image} alt="" width="100%" height="100%" />
                <MyStatus />
            </div>
            <div className={styles.descriptionInfo}>
                <div className={styles.descriptionName}>{props.description.name}</div>
                {props.description.other.map(function (otherItem) {
                    return (
                        <div key={otherItem.id} className={styles.descriptionText}>
                            <span className={styles.descriptionTextLabel}>
                                {otherItem.label}:
                            </span>
                            {otherItem.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Description;