import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as URLS from "../sitePageUrls";

import './style.css';
import siteLogo from './images/logo.png';

import signIn from "../../actions/user/signIn";
import FormInput from "../../components/formInput/FormInput";
import Button from "../../components/button/Button";
import OtherAuthenticate from "../../layouts/plain/components/otherAuthenticate/OtherAuthenticate";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

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

    /**
     * Add new entered character into username field
     * @param event - event of pressing on button
     */
    onUsernameChange = (event) => {
        this.setState({
                username: event.target.value
            }
        );
    };

    /**
     * Add new entered character into password field
     * @param event - event of pressing on button
     */
    onPasswordChange = (event) => {
        this.setState({
                password: event.target.value
            }
        );
    };

    /**
     * Check are all fields in form filled
     * @returns {boolean} - false if some field are empty
     */
    formFilled = () => {
        return this.state.username.length !== 0
            && this.state.password.length !== 0;
    };

    /**
     * Register new user
     * @param event - event of submitting form
     */
    onLoginSubmit = (event) => {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        this.setState({
            username: "",
            password: ""
        });

        this.props.login(username, password);
    };

    render() {
        return (
            <form
                className={"login-form"}
                onSubmit={this.onLoginSubmit}
            >
                <img
                    className={"login-form__site-logo"}
                    src={siteLogo}
                    alt={"Eise Tasks"}
                />
                <FormInput
                    className={"login-form__field email-field"}
                    name={"username"}
                    placeholder={"Login"}
                    type={"text"}
                    onChange={this.onUsernameChange}
                />
                <FormInput
                    className={"login-form__field password-field"}
                    name={"password"}
                    placeholder={"Password"}
                    type={"password"}
                    onChange={this.onPasswordChange}
                />
                <Button
                    className={"login-form__button button"}
                    type={"submit"}
                    disabled={!this.formFilled()}
                    value={"Log in"}
                />

                <OtherAuthenticate
                    className={"login-form"}
                    title={"Don't have an account?"}
                    buttonTitle={"Sign up"}
                    url={URLS.SIGN_UP_PAGE}
                />
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