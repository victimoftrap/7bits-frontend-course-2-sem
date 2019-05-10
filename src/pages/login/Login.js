import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as URLS from "../sitePageUrls";

import './style.css';
import siteLogo from './images/logo.png';

import signIn from "../../actions/user/signIn";
import FormInput from "../../components/inputs/formInput/FormInput";
import Button from "../../components/buttons/baseButton/Button";
import OtherAuthenticate from "../../layouts/plain/components/otherAuthenticate/OtherAuthenticate";
import PropTypes from "prop-types";

/**
 * Component for page to sign in
 */
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    /**
     * Check are user authorized. If not authorized, redirect to sign in page
     */
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
     *
     * @param event - event of pressing on baseButton
     */
    onUsernameChange = (event) => {
        this.setState({
                username: event.target.value
            }
        );
    };

    /**
     * Add new entered character into password field
     *
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
     *
     * @returns {boolean} - false if some field are empty
     */
    formFilled = () => {
        return this.state.username.length !== 0
            && this.state.password.length !== 0;
    };

    /**
     * Register new user
     *
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

        this.props.signIn(username, password).then(
            this.checkAuthorized()
        );
    };

    /**
     * Reset username input field's style
     */
    usernameStyleClass = () => {
        const error = this.props.error;
        const username = this.state.username;
        return error === null || username.length > 0
            ? ""
            : "invalid-username-field";
    };

    /**
     * Reset password input field's style
     */
    passwordStyleClass = () => {
        const error = this.props.error;
        const password = this.state.password;
        return error === null || password.length > 0
            ? ""
            : "invalid-password-field";
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
                    className={`login-form__field ${this.usernameStyleClass()}`}
                    name={"Username"}
                    placeholder={"Username"}
                    type={"text"}
                    onChange={this.onUsernameChange}
                />
                <FormInput
                    className={`login-form__field ${this.passwordStyleClass()}`}
                    name={"Password"}
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
    }
}

Login.propTypes = {
    history:      PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    error:        PropTypes.object.isRequired,
    signIn:       PropTypes.func.isRequired
};

/**
 * Function for converting current state of store to props
 *
 * @param state - state of store
 */
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized,
        error: state.userReducer.error
    };
};

/**
 * Send action to store
 *
 * @param dispatch - method for sending action
 */
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    };
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);