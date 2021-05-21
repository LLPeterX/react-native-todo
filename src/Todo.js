/*
Displays one todo item
*/
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Todo({ todo, onDelete }) {
  const pressHandler = () => {
    console.log(`Press ${todo.id} - ${todo.text}`)
  };
  
  //const deleteHandler = () => onDelete(todo.id);
  
  return (
    <TouchableOpacity activeOpacity={0.5} 
    onLongPress={onDelete.bind(null, todo.id)}
    onPress={pressHandler}>
      <View style={styles.todo}>
        <Text>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5
  },
  text: {
    fontSize: 20
  }
});
