import {connect} from "react-redux";
import {logoutThunkCreator} from "../../redux/authReducer";
import styles from './Header.module.css';
import logo from './img/logo.png';
import {NavLink} from "react-router-dom";
import {isAuthSelector} from "../../redux/selectors";

const Header = (props) => {
    return (
        <header className={styles.header}>
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
                        <NavLink to="/login" className={styles.loginLink}>
                            Login
                        </NavLink>
                    </button>
                }
            </div>
        </header>
    );
};

const mapStateToProps = function (state) {
    return {
        isAuth: isAuthSelector(state),
        authData: state.auth.authData
    };
};

const mapDispatchToProps = {
    logoutThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);