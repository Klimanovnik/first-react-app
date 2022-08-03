import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth
    };
};

export default function (Component) {

    const RedirectComponent = function (props) {
        if (!props.isAuth) {
            return <Redirect to="/login" />;
        }

        return <Component {...props} />;
    };

    return connect(mapStateToProps, {})(RedirectComponent);
};
