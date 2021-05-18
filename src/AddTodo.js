// блок добавления задачи
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo(props) {
  return (
    <View style={styles.container}>
      <Text>Новая задача</Text>
      <View style={styles.block}>
        <TextInput style={styles.input} />
        <Button title="+" style={styles.button} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderStyle: 'solid',
    borderWidth: "2px",
    borderColor: 'green',
    fontSize: 20,
    padding: "10px",
    margin: "5px"
  },
  block: {
    flexDirection: 'row',
    width: "100%",
    padding: 0,
    margin: 0
  },
  input: {
    width: "90%",
    borderStyle: 'solid',
    borderWidth: "2px",
    borderColor: '#ccc',
    fontSize: 20,
    marginRight: "10px"
  },
  button: {
    width: "10%"
  }
});