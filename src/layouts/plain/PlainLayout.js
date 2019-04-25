import React from "react";
import PropTypes from "prop-types";

export default class PlainLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

PlainLayout.propTypes = {
    children: PropTypes.node.isRequired
};