import {ADD_TODO, DELETE_TODO, CHANGE_TODO} from '../actions'

const handlers = {
  [ADD_TODO]: (state, {text}) => ({...state, todos:[...state.todos, {id: Date.now().toString(), text}]}),
  [DELETE_TODO]: (state, {id}) => ({...state, todos: state.todos.filter(item => item.id!=id)}),
  [CHANGE_TODO]: (state, {id, text}) => ({...state, todos: state.todos.map(item => {
    if(item.id === id) {
      item.text = text;
    }
    return item;
  })}),
  DEFAULT: (state) => state
};


export const todoReducer = (state, action) => {
  console.log(`todoReducer: action=${action.type}`);
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state,action);
}