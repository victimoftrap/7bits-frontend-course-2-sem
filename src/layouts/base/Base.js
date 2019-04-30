import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './style.css';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import whoami from "../../actions/user/whoami";

/**
 * Base layout of site page
 */
class Base extends React.Component {
    componentDidMount() {
        this.props.whoami();
    }

    render() {
        return (
            <React.Fragment>
                <Header user={this.props.username}/>
                <main className='main'>
                    <SideBar className='main__side-bar'/>
                    <section className='main__content'>
                        {this.props.children}
                    </section>
                </main>
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        whoami: bindActionCreators(whoami, dispatch)
    };
};

Base.propTypes = {
    children: PropTypes.node.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);
