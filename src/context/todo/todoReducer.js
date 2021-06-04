import {ADD_TODO, DELETE_TODO, CHANGE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS} from '../actions'

const handlers = {
  [ADD_TODO]: (state, {id, text}) => ({...state, todos:[...state.todos, {id, text}]}),
  [DELETE_TODO]: (state, {id}) => ({...state, todos: state.todos.filter(item => item.id!=id)}),
  [CHANGE_TODO]: (state, {id, text}) => ({...state, todos: state.todos.map(item => {
    if(item.id === id) {
      item.text = text;
    }
    return item;
  })}),
  [SHOW_LOADER]: (state) => ({...state, isLoading: true}),
  [HIDE_LOADER]: (state) => ({...state, isLoading: false}),
  [SHOW_ERROR]: (state, {error}) => ({...state, error}),
  [CLEAR_ERROR]: (state) => ({...state, error: null}),
  [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),
  DEFAULT: (state) => state
};


export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state,action);
}