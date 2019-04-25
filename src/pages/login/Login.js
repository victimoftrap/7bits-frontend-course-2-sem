import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Login extends React.Component {
    checkAuthorized = () => {
        if (this.props.authorized) {
            this.props.history.replace('/');
        }
    };

    componentDidMount() {
        this.checkAuthorized();
    }

    componentDidUpdate() {
        this.checkAuthorized();
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
                    name={"login"}
                    placeholder={"login"}
                />
                <input
                    className={"login-form__field"}
                    name={"password"}
                    placeholder={"password"}
                    type={"password"}

                />
                <button
                    className={"login-form__button"}
                    type={"submit"}
                    value={"Authorize"}
                />
            </form>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authorized: state.userReducer.authorized
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);