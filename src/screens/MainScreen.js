import React from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView} from 'react-native';
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'


export default function MainScreen({todos, addTodo, deleteTodo}) {
  return (
    <View style={styles.container}>
      <AddTodo onAddTodo={addTodo}/>
      <FlatList
         style={styles.list}
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
    flexDirection: 'column',
    width: "100%"
  },
  list: {
    width: '100%',
    height: "100%",
    margin: 4
   
  }
});
