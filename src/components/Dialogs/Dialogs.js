import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs() {

    const isActiveLink = ({ isActive }) => {
        return isActive ? (styles.recipient + " " + styles.active) : styles.recipient;
    };

    return (
        <section className={styles.dialogs}>
            <nav className={styles.dialogSelection}>
                <h3 className={styles.dialogsTitle}>Dialog</h3>
                <div className={styles.recipients}>
                    <NavLink to="/dialogs/1" className={isActiveLink}>
                        Nikita
                    </NavLink>
                    <NavLink to="/dialogs/2" className={isActiveLink}>
                        Mike
                    </NavLink>
                    <NavLink to="/dialogs/3" className={isActiveLink}>
                        Fedor
                    </NavLink>
                </div>
            </nav>
            <div className={styles.messagesWindow}>
                <h3 className={styles.dialogsTitle}>Messages</h3>
                <div className={styles.messages}>
                    <div className={styles.message}>Hello</div>
                    <div className={styles.message}>Yo</div>
                    <div className={styles.message}>How are you ?</div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;