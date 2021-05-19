import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  
  return (
    <View style={styles.container}>
      <NavBar title="Список задач"/>
      <View>
        {todos.map(t => <Text key={t.id}>{t.text}</Text>  )}
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
  text: {
    fontSize: 26
  }
});
