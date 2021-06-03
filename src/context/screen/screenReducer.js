import {SET_SCREEN} from '../actions';
export const screenReducer = (state, action) => {
  console.log(`screenReducer: action=${action.type} id=${action.todoId}`);
  switch(action.type) {
    case SET_SCREEN:
      return action.todoId;
    default: 
      return  state;
  }
};