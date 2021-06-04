import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './components/Navbar';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';
import MainScreen from './screens/MainScreen'
import TodoScreen from './screens/TodoScreen'


export const MainLayout = () => {
  const { todos, addTodo, deleteTodo, changeTodo } = useContext(TodoContext);
  const { todoId, changeScreen} = useContext(ScreenContext);

  let screenContent = <MainScreen />
  if (todoId) {
    let selectedTodo = todos.find(item => item.id === todoId);
    if (selectedTodo) screenContent = <TodoScreen todo={selectedTodo}
      onBack={() => changeScreen(null)}
      onDelete={deleteTodo}
      onSave={changeTodo}
    />;
  }
  return (<View style={styles.container}>
    <NavBar title="Список моих задач!" />
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
