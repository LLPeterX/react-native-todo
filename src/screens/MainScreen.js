import React from 'react';
import { StyleSheet, View, FlatList,Image} from 'react-native';
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'


export default function MainScreen({todos, addTodo, deleteTodo, openTodo}) {
  let content = <FlatList
  style={styles.list}
  data={todos}
  renderItem={({ item }) => <Todo todo={item} onDelete={deleteTodo} onOpen={openTodo}/>}
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
