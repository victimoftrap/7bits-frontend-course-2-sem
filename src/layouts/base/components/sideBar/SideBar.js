import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from "react-router-dom";

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <nav className={'side-bar__nav-menu nav-menu'}>
                    <ul className={'nav-menu__list'}>
                        <li className={'nav-menu__item'}>
                            <NavLink
                                to={'/'}
                                exact
                                className={'nav-menu__title item__todo'}
                                activeClassName={'nav-menu__title_active item__todo_active'}
                            >
                                To Do
                            </NavLink>
                        </li>
                        <li className={'nav-menu__item'}>
                            <NavLink
                                to={'/done'}
                                className={'nav-menu__title item__done'}
                                activeClassName={'nav-menu__title_active item__done_active'}
                            >
                                Done
                            </NavLink>
                        </li>
                    </ul>
                </nav>
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
