//import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/NavBar';
// import AddTodo from './src/AddTodo';

export default function App() {
  // const [todoList, setTodo] = useState([]);
  
  // const AddTodo = (text) => {
  //   const newTodo = {
  //     id: Date.now().toString(),
  //     text  
  //   };
    // -- setTodo(todoList.concat([newTodo]));
    // рекомендуется отталкиваться от предыдущего стейта:
    // setTodo((prevState)=>{
    //    return [...prevState, newTodo];
    // });
  // };


  return (
    <View style={styles.container}>
      <NavBar title="Список задач"/>
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
