import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Task extends React.Component {
  render() {
    return (
      <article className="task">
        {this.props.status === "inbox" && <button className="task__mark checkbox"/>}
        {this.props.status === "done" && <button className="task__mark done-mark"/>}

        <h3 className="task__title">{this.props.title}</h3>
        {this.props.status === "inbox" && <button className="task__edit edit"/>}
        <button className="task__delete delete"/>
      </article>
    );
  };
};

Task.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Task.defaultProps = {
  status: 'inbox',
  title: ''
};
