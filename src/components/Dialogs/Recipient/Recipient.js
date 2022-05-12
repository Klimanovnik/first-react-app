import styles from './Recipient.module.css';
import { NavLink } from 'react-router-dom';

function Recipient(props) {

    // const isActiveLink = ({ isActive }) => {
    //     return isActive ? (styles.recipient + " " + styles.active) : styles.recipient;
    // };

    return (
        <NavLink to={"/dialogs/" + props.id} className={styles.recipient} activeClassName={styles.active}>
            {props.name}
        </NavLink>
    );
}

export default Recipient;