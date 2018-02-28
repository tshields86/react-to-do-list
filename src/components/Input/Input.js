import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import classes from './Input.css';
import * as actionTypes from '../../store/actions';

class Input extends Component {
  state = {
    input: ''
  }

  inputChangedHandler = event => {
    this.setState({ input: event.target.value });
  }

  submitTask = event => {
    this.props.onAddTask(this.state.input)
    this.setState({ input: '' });
  }

  render () {
    return (
      <div className={classes.Input}>
        <input
          type="text"
          placeholder="Add a Todo:"
          onChange={this.inputChangedHandler}
          value={this.state.input} />
        <Button
          type="Submit"
          clicked={this.submitTask}>
          <i className="fas fa-plus"></i>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (input) => dispatch({ type: actionTypes.ADD_TASK, input })
  };
};

export default connect(null, mapDispatchToProps)(Input);