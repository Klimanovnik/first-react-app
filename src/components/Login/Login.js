import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="login"
                    component="input"
                    type="text"
                    placeholder="Login"
                />
            </div>
            <div>
                <Field
                    name="password"
                    component="input"
                    type="text"
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

const onSubmit = (data) => {
    console.log(data);
};

export default (props) => {
    return (
        <div style={{color: "#fff"}}>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};