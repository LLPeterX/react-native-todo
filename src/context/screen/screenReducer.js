import {SET_SCREEN} from '../actions';
export const screenReducer = (state, action) => {
  switch(action.type) {
    case SET_SCREEN:
      return action.todoId;
    default: 
      return  state;
  }
};