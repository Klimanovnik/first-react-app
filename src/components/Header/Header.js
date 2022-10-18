import styles from './Header.module.css';
import logo from './img/logo.png';

function Header(props) {
    return (<header className={styles.header}>
        <div className={styles.img}>
            <img src={logo} alt="" width="100%" height="100%"/>
        </div>
        <div>
            {props.isAuth
                ? (
                    <>
                        <div className={styles.login}>{props.authData.login}</div>
                        <button style={{cursor: 'pointer'}} onClick={props.logoutThunkCreator}>Log Out</button>
                    </>
                )
                : <button className={styles.loginButton} type="button">
                    <a
                        className={styles.loginLink}
                        href="https://social-network.samuraijs.com/login"
                        target="_blank"
                    >
                        Login
                    </a>
                </button>
            }
        </div>
    </header>);
}

export default Header;