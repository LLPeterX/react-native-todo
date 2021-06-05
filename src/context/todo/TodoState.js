import React, { useReducer, useContext } from 'react';
import { ADD_TODO, CHANGE_TODO, CLEAR_ERROR, DELETE_TODO, FETCH_TODOS, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER } from '../actions';
import { ScreenContext } from '../screen/screenContext';
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { Alert } from 'react-native'
import { Http } from '../../http'

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    isLoading: true,
    error: null
  };

  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (text) => {
    // const resp = await fetch('https://sample-todo-app-d319e-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ text }), // передаем только text, без id
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );
    // const data = await resp.json(); // получаем добавленный элемент, где name = новый id
    // console.log(data);
    const data = await Http.post('https://sample-todo-app-d319e-default-rtdb.europe-west1.firebasedatabase.app/todos.json',{text});
    dispatch({ type: ADD_TODO, text, id: data.name });
  };

  const deleteTodo = async (id) => {
    const todo = state.todos.find(item => item.id === id);
    Alert.alert('Удаление', // header
      `Вы желаете удалить эту задачу: ${todo.text}`, // text
      // buttons Yes/No 
      [
        {
          text: 'Да',
          style: 'destructive',
          onPress: async () => {
            changeScreen(null);
            await Http.delete(`https://sample-todo-app-d319e-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`);
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

  const changeTodo = async (id, text) => {
    clearError();
    try {
      await Http.patch(`https://sample-todo-app-d319e-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,{text});
      dispatch({ type: CHANGE_TODO, id, text });
    } catch (e) {
      showError('Ошибка сервера');
      console.log(e);
    }
  }

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const data = await Http.get('https://sample-todo-app-d319e-default-rtdb.europe-west1.firebasedatabase.app/todos.json');
//      console.log(data);
      if (data) {
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
        dispatch({ type: FETCH_TODOS, todos });
      }
    } catch (e) {
      showError('Ошибка обращения к серверу');
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  return <TodoContext.Provider value={
    {
      todos: state.todos, isLoading: state.isLoading, error: state.error,
      addTodo, deleteTodo, changeTodo, fetchTodos
    }
  }>
    {children}
  </TodoContext.Provider>
}