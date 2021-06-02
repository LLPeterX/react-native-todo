import React, {useState, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './components/Navbar';
import { TodoContext } from './context/todo/todoContext';
import MainScreen from './screens/MainScreen'
import TodoScreen from './screens/TodoScreen'


export const MainLayout = () => {
  const todoContext = useContext(TodoContext);
  const [todoId, setTodoId] = useState(null); // state for current todo item
  const [todos, setTodos] = useState([]); // state of array of todos
  
  // handler to add todo into array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(), // должна быть строка
      text
    };
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
  let screenContent = <MainScreen 
  todos={todoContext.todos} addTodo={addTodo} deleteTodo={deleteTodo} openTodo={setTodoId}/>;
  if(todoId) {
    let selectedTodo = todos.find(item =>item.id === todoId);
    if(selectedTodo) screenContent = <TodoScreen todo={selectedTodo} 
       onBack={()=>setTodoId(null)} 
       onDelete={deleteTodo}
       onSave={changeTodo}
       />;
  }
  return ( <View style={styles.container}>
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
