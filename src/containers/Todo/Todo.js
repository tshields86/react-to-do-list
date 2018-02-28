import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import List from '../List/List';
import classes from './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Input />
        <List />
      </div>
    );
  }
}

export default Todo;
