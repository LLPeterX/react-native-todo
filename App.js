<<<<<<< Updated upstream
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NavBar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
// import AddTodo from './src/AddTodo';
// import Todo from './src/Todo';
=======
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/MainScreen'
//import TodoScreen from './src/screens/TodoScreen'
import NavBar from './src/components/Navbar'
import Constants from 'expo-constants';

>>>>>>> Stashed changes

export default function App() {
  // state to hold array of todos
  const [todos, setTodos] = useState([]);
  // handler to add todo into array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(), // must be string (used as key value)
      text: text // text of task
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  //handler to remove task by id
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter(item => item.id != id));

  return (
    <View style={styles.container}>
      <NavBar title="Список моих задач"/>
      <MainScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});
