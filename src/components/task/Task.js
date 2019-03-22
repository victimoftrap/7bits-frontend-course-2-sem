import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ProgressButton from "../buttons/progress/ProgressButton";
import ToolButton from "../buttons/tool/ToolButton";

export default class Task extends React.Component {
  onClick = () => {
      console.log(this.props.id);
  };

  render() {
    return (
      <article className="task">
        <ProgressButton
            id={this.props.id}
            className={this.props.status === "inbox" ? "inbox-button" : "done-button"}
            onClick={this.onClick}
        />

        <h3 className={"task__title"}>{this.props.title}</h3>

        <div className={"task__tools"}>
        {this.props.status === "inbox" && <ToolButton
            id={this.props.id}
            className={"edit"}
            onClick={this.onClick}
        />
        }

          <ToolButton
              id={this.props.id}
              className={"delete"}
              onClick={this.onClick}
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
