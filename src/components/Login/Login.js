import { reduxForm, Field } from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                    style={{cursor: "pointer"}}
                    id="rememberMe"
                />
                <label
                    htmlFor="rememberMe"
                    style={{cursor: "pointer"}}
                >
                    Remember me
                </label>
            </div>
            <div style={{color: 'red'}}>{props.error}</div>
            <div>
                <button
                    style={{cursor: "pointer"}}
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    loginThunkCreator
};

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData);
    };

    if (props.isAuth) {
        return <Redirect to="/dialogs" />;
    }

    return (
        <div style={{color: "#fff"}}>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);