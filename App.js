import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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

  //const renderTodo = (todoItem) => <Todo todo={todoItem} />;
  
  return (
    <View style={styles.container}>
      <NavBar title="Список задач"/>
      <AddTodo onAddTodo={addTodo}/>
      <FlatList style={styles.list}
         data={todos}
         renderItem={({ item }) => <Todo todo={item} />}
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
    marginLeft: '4px',
    marginRight: '4px'
  }
});
