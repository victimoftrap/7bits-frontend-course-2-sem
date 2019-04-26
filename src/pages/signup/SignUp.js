import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as URLS from "../sitePageUrls";

import './style.css';
import siteLogo from './images/logo.png';

import Button from "../../components/button/Button";
import FormInput from "../../components/formInput/FormInput";
import register from "../../actions/user/register";

/**
 * Component for registration page
 */
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

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
     * Add new entered character into email field
     * @param event - event of pressing on button
     */
    onEmailChange = (event) => {
        this.setState({
                email: event.target.value
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
        return this.state.email.length !== 0
            && this.state.password.length !== 0;
    };

    /**
     * Register new user
     * @param event - event of submitting form
     */
    onRegistrationSubmit = (event) => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        this.setState({
            email: "",
            password: ""
        });

        this.props.register(email, password);
    };

    /**
     * Render part of the page
     * @returns {*} React fragment
     */
    render() {
        return (
            <form
                className={"sign-up-form"}
                onSubmit={this.onRegistrationSubmit}
            >
                <img
                    className={"sign-up-form__site-logo"}
                    src={siteLogo}
                    alt={"Eise Tasks"}
                />
                <FormInput
                    className={"sign-up-from__field email-field"}
                    name={"email"}
                    placeholder={"E-mail"}
                    type={"email"}
                    onChange={this.onEmailChange}
                />
                <FormInput
                    className={"sign-up-from__field password-field"}
                    name={"password"}
                    placeholder={"Password"}
                    type={"password"}
                    onChange={this.onPasswordChange}
                />
                <Button
                    className={"sign-up-form__button button"}
                    value={"Sign up"}
                    type={"submit"}
                    disabled={!this.formFilled()}
                />

                <article className={"sign-up-form__already-registered already-registered"}>
                    <p className={"already-registered__title"}
                    >Don't have an account?</p>

                    <a className={"already-registered__redirect"}
                       href={URLS.SIGN_IN_PAGE}
                    >Log in</a>
                </article>
            </form>
        );
    }
}

/**
 * Function for converting current state of store to props
 * @param state - state of store
 * @returns {{}}
 */
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized
    };
};

/**
 * Send action to store
 * @param dispatch - method for sending action
 * @returns {{}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch)
    };
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);