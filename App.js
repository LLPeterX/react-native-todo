//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/NavBar';
import AddTodo from './src/AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title="Список задач"/>
      <AddTodo />
      {/* <Text style={styles.text}>Привет, React Native!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 26
  }
});
