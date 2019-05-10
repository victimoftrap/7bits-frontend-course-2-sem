import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { I18n } from 'react-redux-i18n';

import * as URLS from "../sitePageUrls";

import './style.css';
import siteLogo from './images/logo.png';

import signIn from "../../actions/user/signIn";
import register from "../../actions/user/register";
import Button from "../../components/buttons/baseButton/Button";
import FormInput from "../../components/inputs/formInput/FormInput";
import OtherAuthenticate from "../../layouts/plain/components/otherAuthenticate/OtherAuthenticate";
import PropTypes from "prop-types";

/**
 * Component for registration page
 */
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            agree: false
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
     * Add new entered character into username field
     *
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
     * Add user agree to processing his personal data
     *
     * @param event - event of pressing on checkbox
     */
    onUserAgreement = (event) => {
        this.setState({
                agree: event.target.checked
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
            && this.state.password.length !== 0
            && this.state.agree;
    };

    /**
     * Register new user
     *
     * @param event - event of submitting form
     */
    onRegistrationSubmit = (event) => {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        this.setState({
            username: "",
            password: ""
        });

        this.props.register(username, password)
            .then(
                this.props.signIn(username, password)
            )
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
                    className={`sign-up-from__field ${this.usernameStyleClass()}`}
                    name={I18n.t('layouts.plain.auth.username')}
                    placeholder={I18n.t('layouts.plain.auth.username')}
                    type={"text"}
                    onChange={this.onUsernameChange}
                />
                <FormInput
                    className={`sign-up-from__field ${this.passwordStyleClass()}`}
                    name={I18n.t('layouts.plain.auth.password')}
                    placeholder={I18n.t('layouts.plain.auth.password')}
                    type={"password"}
                    onChange={this.onPasswordChange}
                />

                <section className={"sign-up-form__agreement agreement"}>

                    <label className={"agreement__title"}>
                        <input
                            className={"agreement__button"}
                            type={"checkbox"}
                            onChange={this.onUserAgreement}
                        />
                        {I18n.t('layouts.plain.auth.personal-data')}
                    </label>
                </section>

                <Button
                    className={"sign-up-form__button button"}
                    value={I18n.t('layouts.plain.auth.sign-up')}
                    type={"submit"}
                    disabled={!this.formFilled()}
                />

                <OtherAuthenticate
                    className={"sign-up-form"}
                    title={I18n.t('layouts.plain.auth.have-account')}
                    buttonTitle={I18n.t('layouts.plain.auth.sign-in')}
                    url={URLS.SIGN_IN_PAGE}
                />
            </form>
        );
    }
}

SignUp.propTypes = {
    history:      PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    error:        PropTypes.object.isRequired,
    register:     PropTypes.func.isRequired,
    signIn:       PropTypes.func.isRequired
};

/**
 * Function for converting current state of store to props
 *
 * @param state - state of store
 */
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized
    };
};

/**
 * Send action to store
 *
 * @param dispatch - method for sending action
 */
const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
        signIn: bindActionCreators(signIn, dispatch)
    };
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);