import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
 
// for expo-app-loading
async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
}

export default function App() {
  // state for current todo item
  const [todoId, setTodoId] = useState(null);
  // state to hold array of todos
  const [todos, setTodos] = useState([]);
  // state for app loading
  const [isReady, setReady] = useState(false);
  
  if(!isReady) {
    return <AppLoading 
      startAsync={loadApplication}
      onError={(err)=>console.log(err)}
      onFinish={()=>setReady(true)}
    />
  }

  
  // handler to add todo into array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(), // must be string (used as key value)
      text
    };
    //setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodos([...todos, newTodo ]);
  };

  
  //handler to remove task by id
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter(item => item.id != id));

  // change text of todo
  const changeTodo = (id, text) => {
    setTodos(old => 
      old.map(item => {
        if(item.id === id) {
          item.text = text;
        }
        return item;
      })
    );
  }
  
  // content of current screen
  let screenContent = <MainScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} openTodo={setTodoId}/>;
  if(todoId) {
    let selectedTodo = todos.find(item =>item.id === todoId);
    if(selectedTodo) screenContent = <TodoScreen todo={selectedTodo} 
       onBack={()=>setTodoId(null)} 
       onDelete={deleteTodo}
       onSave={changeTodo}
       />;
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
