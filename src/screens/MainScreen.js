import React, {useContext, useEffect, useCallback} from 'react';
import { StyleSheet, View, FlatList,Image} from 'react-native';
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'
import { AppError } from '../components/ui/AppError';
import { AppLoader } from '../components/ui/AppLoader';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';


export default function MainScreen() {
  const {todos, addTodo, deleteTodo, fetchTodos, isLoading, error} = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);

  const loadTodos = useCallback(async ()=>await fetchTodos(), [fetchTodos]);
  
  useEffect(()=> {
    loadTodos();  
  },[]);

  if(error) {
    return <AppError error={error} reload={loadTodos}/>
  }
  
  if(isLoading) {
    return <AppLoader/>
  }

  let content = <FlatList
  style={styles.list}
  data={todos}
  renderItem={({ item }) => <Todo todo={item} onDelete={deleteTodo} onOpen={changeScreen}/>}
  keyExtractor={item=>item.id}
/>;
if(!todos || todos.length===0) {
  content = <View style={styles.imgWrapper}>
    <Image
    source={require("../../assets/icon.png")}
    style={styles.image}
  />
  </View>;
}
  return (
    <View style={styles.container}>
      <AddTodo onAddTodo={addTodo}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    width: "100%"
  },
  list: {
    width: '100%',
    height: "100%",
    margin: 4
  },
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: 'contain'
  }
});
