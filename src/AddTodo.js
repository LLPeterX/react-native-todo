// блок добавления задачи
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ onAddTodo }) {
  let [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.length > 0) {
      onAddTodo(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Новая задача</Text>
      <View style={styles.block}>
        <TextInput style={styles.input} value={value} onChangeText={(text) => setValue(text)} />
        <Button title="+" style={styles.button} onPress={pressHandler} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    width: "100%",
    borderStyle: 'solid',
    borderWidth: "2px",
    borderColor: 'green',
    borderRadius: "6px",
    fontSize: 20,
    padding: "4px",
    bottom: "5px",
    justifyContent: "space-between",
    alignItems: "center"
  },
  block: {
    flexDirection: 'row',
    width: "100%",
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