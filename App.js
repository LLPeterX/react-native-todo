import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

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
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter(item=>item.id != id));
    
  return (
    <View style={styles.container}>
      <NavBar title="Список моих задач"/>
      <AddTodo onAddTodo={addTodo}/>
      <FlatList style={styles.list}
         data={todos}
         renderItem={({ item }) => <Todo todo={item} onDelete={deleteTodo}/>}
         keyExtractor={item=>item.id}
      />
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
    height: '80%',
    marginLeft: 4,
    marginRight: 4
  }
});
