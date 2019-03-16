import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
  render() {
    return (
      <article className="article">
        <h3 className="article__title">{this.props.title}</h3>
        <div className="article__edit edit"/>
        <div className="article__delete delete"/>
      </article>
    );
  };
};

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Article.defaultProps = {
  title: '',
  description: ''
};
