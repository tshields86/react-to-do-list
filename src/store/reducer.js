import * as actionTypes from './actions';

const initialState = {
  tasks: [],
  completedTasks: []
};

const reducer = (state = initialState, action) => {
  let updatedTasks;
  switch (action.type) {
    case actionTypes.ADD_TASK:
      if (!action.input) return { ...state };
      const newTask = {
        taskName: action.input,
        id: Math.random()
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks]
      }
    case actionTypes.COMPLETE_TASK:
      updatedTasks = state.tasks.filter(task => task.id !== action.id);
      const completedTask = state.tasks.filter(task => task.id === action.id)[0];
      return {
        ...state,
        tasks: updatedTasks,
        completedTasks: [completedTask, ...state.completedTasks]
      }
    case actionTypes.DELETE_TASK:
      updatedTasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks: updatedTasks
      }
    default:
      return state;
  }
}

export default reducer;