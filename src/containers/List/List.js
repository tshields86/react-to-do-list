import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../components/ListItem/ListItem';
import Button from '../../components/Button/Button';
import classes from './List.css';
import * as actionTypes from '../../store/actions';

class List extends Component {
  render() {
    return (
      <div>
        <ul className={classes.ActiveList}>
          {
            this.props.tasks.map(task => {
              return (
                <ListItem key={task.id}>
                  {task.taskName}
                  <div>
                    <Button
                      type="Complete"
                      clicked={() => this.props.onCompleteTask(task.id)}>
                      <i className="fas fa-check"></i>
                    </Button>
                    <Button
                      type="Delete"
                      clicked={() => this.props.onDeleteTask(task.id)}>
                      <i className="fas fa-minus"></i>
                    </Button>
                  </div>
                </ListItem>
              )
            })
          }
        </ul>
        <ul className={classes.CompletedList}>
          {
            this.props.completedTasks.map(task => {
              return (
                <ListItem key={task.id}>
                  {task.taskName}
                </ListItem>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    completedTasks: state.completedTasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCompleteTask: (id) => dispatch({ type: actionTypes.COMPLETE_TASK, id }),
    onDeleteTask: (id) => dispatch({ type: actionTypes.DELETE_TASK, id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);