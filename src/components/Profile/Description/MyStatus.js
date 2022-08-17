import React from "react";
import {connect} from "react-redux";
import {putMyStatusThunkCreator} from "../../../redux/profileReducer";

const mapStateToProps = function (state) {
    return {
        myStatus: state.profile.myStatus,
        auth: state.auth
    };
};

const mapDispatchToProps = {
    putMyStatusThunkCreator
};

class MyStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myStatus: this.props.myStatus,
            isEditMode: false
        };
    }

    onBlur = () => {
        this.props.putMyStatusThunkCreator(this.state.myStatus);
        this.toggleMode();
    };

    toggleMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    }

    onEnter = (event) => {
        if (event.code === "Enter" && !event.repeat) {
            this.onBlur();
        }
    }

    onChangeInput = (event) => {
        this.setState({
            myStatus: event.currentTarget.value
        });
    }

    render() {
        return this.props.auth.isAuth && (
            <>
                {this.state.isEditMode
                    ? <input autoFocus type="text" onKeyDown={this.onEnter} onBlur={this.onBlur}
                             value={this.state.myStatus} onChange={this.onChangeInput}/>
                    : <div onClick={this.toggleMode} style={{color: "#fff", cursor: "pointer"}}
                           title="Нажмите чтобы изменить статус">{this.props.myStatus || "------"}</div>
                }
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStatus);