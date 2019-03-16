import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <ul className='side-bar__list'>
                    <li className='side-bar__item item__todo'>
                        <a className='side-bar__title' href='/'>To Do</a>
                    </li>
                    <li className='side-bar__item item__done'>
                        <a className='side-bar__title' href='/'>Done</a>
                    </li>
                </ul>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: ''
};
