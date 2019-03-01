import React from 'react';

import './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
          <div className='header__content'>
              <div className='header__logo'/>
          </div>
      </header>
    );
  };
};
