import {ADD_TODO, DELETE_TODO, CHANGE_TODO} from '../actions'
export const todoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {...state, 
        todos:[...state.todos, {id: Date.now().toString(), text: action.text}]
      }
    case DELETE_TODO:
      return {...state, todos: state.todos.filter(item => item.id!=action.id)}
    case CHANGE_TODO:
      return {...state, todos: state.todos.map(item => {
        if(item.id === action.id) {
          item.text = action.text;
        }
        return item;
      })}
    default:
      return state;      
  }
}