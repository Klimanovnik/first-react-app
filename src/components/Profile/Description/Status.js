import React from "react";

class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "Some status",
            isEditMode: false
        };
    }

    toggleMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    }

    onEnter = (event) => {
        if (event.code === "Enter" && !event.repeat) {
            this.toggleMode();
        }
    }

    onChangeInput = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    render() {
        return (
            <>
                {this.state.isEditMode
                    ? <input autoFocus type="text" onKeyDown={this.onEnter} onBlur={this.toggleMode} value={this.state.status} onChange={this.onChangeInput} />
                    : <div onClick={this.toggleMode} style={{color: "#fff", cursor: "pointer"}} title="Нажмите чтобы изменить статус">{this.state.status}</div>
                }
            </>
        );
    }
}

export default Status;