import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

    const isActiveLink = ({ isActive }) => {
        return isActive ? (styles.item + " " + styles.active) : styles.item;
    };

    return (
        <nav className={styles.navigation}>
            <NavLink to="/profile" className={isActiveLink}>
                Profile
            </NavLink>
            <NavLink to="/dialogs" className={isActiveLink}>
                Dialogs
            </NavLink>
            <NavLink to="/news" className={isActiveLink}>
                News
            </NavLink>
            <NavLink to="/music" className={isActiveLink}>
                Music
            </NavLink>
            <NavLink to="/settings" className={isActiveLink}>
                Settings
            </NavLink>
        </nav>
    );
}

export default Navigation;