import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
  render() {
    return (
      <article className="task">
        {this.props.status === "inbox" && <div className="task__mark checkbox"/>}
        {this.props.status === "done" && <div className="task__mark done-mark"/>}

        <h3 className="task__title">{this.props.title}</h3>
        {this.props.status === "inbox" && <div className="task__edit edit"/>}
        <div className="task__delete delete"/>
      </article>
    );
  };
};

Article.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Article.defaultProps = {
  status: 'inbox',
  title: ''
};
