import React from "react";
import PropTypes from 'prop-types';

import "./style.css";

export default class OtherAuthenticate extends React.Component {
    render() {
        const {className, title, buttonTitle, url} = this.props;

        return (
            <section className={`${className}__another-way another-way`}>
                <p className={"another-way__title"}
                >{title}</p>

                <a className={"another-way__redirect"}
                   href={url}
                >{buttonTitle}</a>
            </section>
        );
    }
}

OtherAuthenticate.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};