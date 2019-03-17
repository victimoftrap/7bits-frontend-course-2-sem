import React from 'react';

import Article from '../../components/task/Article';

import list from './list';

import './style.css';

export default class Home extends React.Component {
  renderList = () => {
    return list.data.map((item) => {
      return (
        <Article title={item.text} status={item.status}/>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
