// блок добавления задачи
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function AddTodo({ onAddTodo }) {
  // state to hold TextInput value
  let [value, setValue] = useState("");

  // Button press handler
  const pressHandler = () => {
    // if input string is not empty then add in array todos by calling functions from props
    if (value.trim().length > 0) {
      onAddTodo(value);
      setValue("");
    } else {
      Alert.alert('Заполните поле ввода');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Новая задача</Text>
      <View style={styles.block}>
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={(text) => setValue(text)} 
          placeholder="Введите здесь имя новой задачи"/>
        <Button title="+" onPress={pressHandler} />

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
    borderRadius: "6px",
    fontSize: 20,
    padding: "4px",
    
    alignItems: "center"
  },
  block: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    width: "100%",
    fontSize: 16,
    marginRight: "10px"
  },
});