// блок добавления задачи
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

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
      Alert.alert('Ошибка', 'Заполните поле ввода');
    }
  };

  return (
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="Название новой задачи"
          autoCapitalize='none'
          clearButtonMode='while-editing'
        />
        <Button title=" + " onPress={pressHandler} />
      </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: '#0a13bd',
    padding: 4
  },
  input: {
    width: "90%",
    fontSize: 16,
    marginRight: 4,
  },
  title: {
    fontWeight: 'bold'
  }
});