import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as URLS from "../sitePageUrls";

import './style.css';

import signIn from "../../actions/user/signIn";

class Login extends React.Component {
    checkAuthorized = () => {
        if (this.props.isAuthorized) {
            this.props.history.replace(URLS.MAIN_TODO_TASKS_PAGE);
        }
    };

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.props.history.replace(URLS.MAIN_TODO_TASKS_PAGE);
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.props.history.replace(URLS.MAIN_TODO_TASKS_PAGE);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target['username'].value;
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
                    className={"login-form__field"}
                    name={"username"}
                    placeholder={"E-mail"}
                />
                <input
                    className={"login-form__field"}
                    name={"password"}
                    placeholder={"Password"}
                    type={"password"}

                />
                <button
                    className={"login-form__button login-button"}
                    type={"submit"}
                    disabled={false}
                >Log in</button>
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
        login: bindActionCreators(signIn, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);