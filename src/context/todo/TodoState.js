import React, { useReducer, useContext } from 'react';
import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from '../actions';
import { ScreenContext } from '../screen/screenContext';
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{id: "1", text: "Первая строка"}]
  }
  const {changeScreen} = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer,initialState);
 
  const addTodo = (text) => dispatch({type: ADD_TODO, text});
  const deleteTodo = (id) => {
    changeScreen(null);
    dispatch({type: DELETE_TODO, id});
  }    
  const changeTodo = (id, text) => {
    changeScreen(null);
    dispatch({type: CHANGE_TODO, id, text});
  }

  return <TodoContext.Provider value={
    {
      todos: state.todos,
      addTodo, deleteTodo, changeTodo
    }
  }>
    {children}
  </TodoContext.Provider>
}