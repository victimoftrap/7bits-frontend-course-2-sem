import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import './style.css';

import login from "../../actions/user/login";

class Login extends React.Component {
    checkAuthorized = () => {
        if (this.props.isAuthorized) {
            this.props.history.replace('/');
        }
    };

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.props.history.replace('/');
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.props.history.replace('/');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target['login'].value;
        const password = event.target['password'].value;

        this.props.login(username, password);
    };

    render() {
        return (
            <form
                className={"login-form"}
                onSubmit={this.handleSubmit}
            >
                <input
                    className={"login-form__field login"}
                    name={"login"}
                    placeholder={"login"}
                />
                <input
                    className={"login-form__field password"}
                    name={"password"}
                    placeholder={"password"}
                    type={"password"}

                />
                <button
                    className={"login-form__button"}
                    type={"submit"}
                    disabled={false}
                >Authorize</button>
            </form>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);