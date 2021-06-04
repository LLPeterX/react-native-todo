import React, { useReducer, useContext } from 'react';
import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from '../actions';
import { ScreenContext } from '../screen/screenContext';
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { Alert } from 'react-native'


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: "1", text: "Первая строка" }]
  }
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => dispatch({ type: ADD_TODO, text });
  
  const deleteTodo = (id) => {
    const todo = state.todos.find(item => item.id === id);
    Alert.alert('Удаление', // header
      `Вы желаете удалить эту задачу: ${todo.text}`, // text
      // buttons Yes/No 
      [
        {
          text: 'Да',
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: DELETE_TODO, id });
          }
        },
        {
          text: 'Нет',
          style: 'cancel'
        }
      ],
      // options
      {
        cancelable: true
      }
    );

  }

  const changeTodo = (id, text) => {
    changeScreen(null);
    dispatch({ type: CHANGE_TODO, id, text });
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