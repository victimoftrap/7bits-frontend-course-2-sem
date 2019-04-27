import React from "react";
import PropTypes from "prop-types";

import './style.css';

export default class PlainLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className={"authorization-main"}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

PlainLayout.propTypes = {
    children: PropTypes.node.isRequired
};