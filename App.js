import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(), // будем использовать как key, а он должен быть строкой
      text
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  
  return (
    <View style={styles.container}>
      <NavBar title="Список задач"/>
      <View style={styles.list}>
        {todos.map(todoItem => <Todo key={todoItem.id} todo={todoItem} />  )}
      </View>
      <AddTodo onAddTodo={addTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  list: {
    width: '100%',
    marginLeft: '4px',
    marginRight: '4px'
  }
});
