import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Recipient(props) {

    const isActiveLink = ({ isActive }) => {
        return isActive ? (styles.recipient + " " + styles.active) : styles.recipient;
    };

    return (
        <NavLink to={"/dialogs/" + props.id} className={isActiveLink}>
            {props.name}
        </NavLink>
    );
}

function Message(props) {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}

function Dialogs() {

    return (
        <section className={styles.dialogs}>
            <nav className={styles.dialogSelection}>
                <h3 className={styles.dialogsTitle}>Dialog</h3>
                <div className={styles.recipients}>
                    <Recipient name="Dima" id="1" />
                    <Recipient name="Mike" id="2" />
                    <Recipient name="Fedor" id="3" />
                    <Recipient name="Slava" id="4" />
                </div>
            </nav>
            <div className={styles.messagesWindow}>
                <h3 className={styles.dialogsTitle}>Messages</h3>
                <div className={styles.messages}>
                    <Message message="Hello" />
                    <Message message="Yo" />
                    <Message message="How are you ?" />
                    <Message message="I'am OK" />
                </div>
            </div>
        </section>
    );
}

export default Dialogs;