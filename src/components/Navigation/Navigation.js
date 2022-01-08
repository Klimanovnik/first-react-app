import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

    const isActiveLink = ({ isActive }) => {
        return isActive ? (styles.item + " " + styles.active) : styles.item;
    };

    const navigationItems = [
        { id: 1, value: "profile" },
        { id: 2, value: "dialogs" },
        { id: 3, value: "news" },
        { id: 4, value: "music" },
        { id: 5, value: "settings" }
    ];

    return (
        <nav className={styles.navigation}>
            {navigationItems.map(function (navigationItem) {
                return (
                    <NavLink key={navigationItem.id} to={"/" + navigationItem.value} className={isActiveLink}>
                        {navigationItem.value}
                    </NavLink>
                );
            })}
        </nav>
    );
}

export default Navigation;