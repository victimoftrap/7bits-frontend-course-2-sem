import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as URLS from "../sitePageUrls";

import './style.css';
import siteLogo from './images/logo.png';

import signIn from "../../actions/user/signIn";
import FormInput from "../../components/formInput/FormInput";
import Button from "../../components/button/Button";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
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
    onLoginSubmit = (event) => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        this.setState({
            email: "",
            password: ""
        });

        this.props.login(email, password);
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
                    className={"login-form__field"}
                    name={"username"}
                    placeholder={"E-mail"}
                    onChange={this.onEmailChange}
                />
                <FormInput
                    className={"login-form__field"}
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

                <section className={"login-form__not-registered not-registered"}>
                    <p className={"not-registered__title"}
                    >Don't have an account?</p>

                    <a className={"not-registered__redirect"}
                       href={URLS.SIGN_UP_PAGE}
                    >Sign up</a>
                </section>
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