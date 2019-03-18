import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <div className='header__logo'/>
          <a className="header__user user" href="/">{this.props.user}</a>
        </div>
      </header>
    );
  };
};

Header.propTypes = {
  user: PropTypes.string.isRequired
};

Header.defaultProps = {
  user: "Johny"
};