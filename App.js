import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
// import AddTodo from './src/AddTodo';
// import Todo from './src/Todo';

export default function App() {
  // state for current todo item
  const [todoId, setTodoId] = useState(null);
  // state to hold array of todos
  const [todos, setTodos] = useState([]);
  // handler to add todo into array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(), // must be string (used as key value)
      text // text of todo
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  //handler to remove task by id
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter(item => item.id != id));
  
  // open TodoScreen
  const openTodo = (id) => setTodoId(id);
  // content of current screen
  let screenContent = <MainScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} openTodo={openTodo}/>;
  // more simpe without openTodo():
  //let screenContent = <MainScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} openTodo={(id)=>{setTodoId(id)}}/>;
  if(todoId) {
    let selectedTodo = todos.find(item =>item.id === todoId);
    if(selectedTodo) screenContent = <TodoScreen todo={selectedTodo} onBack={()=>setTodoId(null)}/>;
  }

  return (
    <View style={styles.container}>
      <NavBar title="Список моих задач!"/>
      {screenContent}
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
