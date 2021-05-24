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
      Alert.alert('Ошибка','Заполните поле ввода');
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    fontSize: 20,
    padding: 4,
    alignItems: "center",
    height: 54
  },
  block: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },
  input: {
    width: "90%",
    fontSize: 16,
    marginRight: 4
    
  },
  title: {
    fontWeight: 'bold'
  }
});