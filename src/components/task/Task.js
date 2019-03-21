import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import MarkerButton from "../buttons/marker/MarkerButton";
import ToolButton from "../buttons/tool/ToolButton";

export default class Task extends React.Component {
  onClick = () => {
      console.log(this.props.id);
  };

  render() {
    return (
      <article className="task">
        <MarkerButton
            id={this.props.id}
            className={this.props.status === "inbox" ? "checkbox" : "done-mark"}
            onClick={this.onClick}
        />

        <h3 className={"task__title"}>{this.props.title}</h3>

        <div className={"task__tools"}>
          {this.props.status === "inbox" && <ToolButton id={this.props.id} className={"edit"}/>}

          <ToolButton
              id={this.props.id}
              className={"delete"}
          />
        </div>
      </article>
    );
  };
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Task.defaultProps = {
  id: '',
  status: 'inbox',
  title: ''
};
