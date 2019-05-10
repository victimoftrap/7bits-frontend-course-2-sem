import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

/**
 * Component for site header
 */
export default class Header extends React.Component {
    render() {
        const {user} = this.props;

        return (
            <header className='header'>
                <div className='header__content'>
                    <div className='header__logo'/>
                    <a className="header__user user" href="/">{user}</a>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    user: PropTypes.string.isRequired
};