import styles from './Header.module.css';
import logo from './img/logo.jpg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.img}>
                <img src={logo} alt="" width="100%" height="100%" />
            </div>
        </header>
    );
}

export default Header;